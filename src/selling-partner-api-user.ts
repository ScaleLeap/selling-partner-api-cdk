import * as iam from '@aws-cdk/aws-iam';
import * as cdk from '@aws-cdk/core';

import { SellingPartnerAPIRole } from './selling-partner-api-role';

export interface SellingPartnerAPIConstructProperties {
  readonly userName?: string;
}

/**
 * A high lever construct for setting up the AWS account for Selling Partner API.
 *
 * @link https://github.com/amzn/selling-partner-api-docs/blob/main/guides/developer-guide/SellingPartnerApiDeveloperGuide.md#step-1-create-an-aws-account
 */
export class SellingPartnerAPIUser extends cdk.Construct {
  public readonly user: iam.IUser
  public readonly role: iam.IRole

  constructor(scope: cdk.Construct, id: string, props?: SellingPartnerAPIConstructProperties) {
    super(scope, id);

    /**
     * Step 2. Create an IAM user
     * @link https://github.com/amzn/selling-partner-api-docs/blob/main/guides/developer-guide/SellingPartnerApiDeveloperGuide.md#step-2-create-an-iam-user
     */
    this.user = new iam.User(this, 'User', props);

    /**
     * Step 4. Create an IAM role
     * @link https://github.com/amzn/selling-partner-api-docs/blob/main/guides/developer-guide/SellingPartnerApiDeveloperGuide.md#step-4-create-an-iam-role
     */
    this.role = new SellingPartnerAPIRole(this, 'Role', { assumedBy: this.user });

    /**
     * Step 5. Add an AWS Security Token Service policy to your IAM user
     * @link https://github.com/amzn/selling-partner-api-docs/blob/main/guides/developer-guide/SellingPartnerApiDeveloperGuide.md#step-5-add-an-aws-security-token-service-policy-to-your-iam-user
     */
    this.user.attachInlinePolicy(
      new iam.Policy(this, 'STS', {
        statements: [
          new iam.PolicyStatement({
            actions: [
              'sts:AssumeRole',
              'sts:AssumeRoleWithSAML',
              'sts:AssumeRoleWithWebIdentity',
            ],
            resources: [this.role.roleArn],
          }),
          new iam.PolicyStatement({
            actions: [
              'sts:DecodeAuthorizationMessage',
            ],
            resources: ['*'],
          }),
        ],
      }),
    );

    this.role.grantPassRole(this.user);
  }
}