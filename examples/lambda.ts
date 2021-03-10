
import * as cdk from '@aws-cdk/core'
import * as iam from '@aws-cdk/aws-iam';
import { SellingPartnerAPIRole } from '../src'

/**
 * For user based auth.
 */
export class SellingPartnerAPIStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, properties?: cdk.StackProps) {
    super(scope, id, properties)

    const role = new SellingPartnerAPIRole(scope, 'SellingPartnerAPIRole', {
      assumedBy: new iam.ServicePrincipal('lambda.amazonaws.com'),
    })

    // const lambda = new lambda.NodejsFunction(this, 'FunctionThatTalksToSPAPI', {
    //   // ...
    //   role, // <-- critical
    // })
  }
}
