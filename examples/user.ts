
import * as cdk from '@aws-cdk/core'
import * as iam from '@aws-cdk/aws-iam';
import { SellingPartnerAPIUser} from '../src'


/**
 * For user based auth.
 */
export class SellingPartnerAPIStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, properties?: cdk.StackProps) {
    super(scope, id, properties)

    const spUser = new SellingPartnerAPIUser(scope, 'SellingPartnerAPIUser')

    const accessKey = new iam.CfnAccessKey(this, 'AccessKey', {
      userName: spUser.user.userName,
    })

    new cdk.CfnOutput(this, 'userArn', { value: spUser.user.userArn })
    new cdk.CfnOutput(this, 'roleArn', { value: spUser.role.roleArn })

    new cdk.CfnOutput(this, 'awsAccessKeyId', { value: accessKey.ref })
    // SECURITY WARNING: the following line will print the secret to console
    // new cdk.CfnOutput(this, 'awsSecretAccessKey', { value: accessKey.attrSecretAccessKey })
  }
}
