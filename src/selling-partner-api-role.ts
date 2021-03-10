import * as iam from '@aws-cdk/aws-iam';
import * as cdk from '@aws-cdk/core';

export interface SellingPartnerAPIRoleProps {
  readonly assumedBy: iam.IPrincipal;
}

/**
 * IAM Role for Selling Partner API.
 *
 * @link https://github.com/amzn/selling-partner-api-docs/blob/main/guides/developer-guide/SellingPartnerApiDeveloperGuide.md#step-4-create-an-iam-role
 */
export class SellingPartnerAPIRole extends iam.Role {
  constructor(scope: cdk.Construct, id: string, props: SellingPartnerAPIRoleProps) {
    super(scope, id, {
      assumedBy: props.assumedBy,
      description: 'Selling Partner API',
      inlinePolicies: {
        /**
         * Step 3. Create an IAM policy
         * @link https://github.com/amzn/selling-partner-api-docs/blob/main/guides/developer-guide/SellingPartnerApiDeveloperGuide.md#step-3-create-an-iam-policy
         */
        executeApi: new iam.PolicyDocument({
          statements: [
            new iam.PolicyStatement({
              actions: ['execute-api:Invoke'],
              resources: ['arn:aws:execute-api:*:*:*'],
            }),
          ],
        }),
      },
    });
  }
}