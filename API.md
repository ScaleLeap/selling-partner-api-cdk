# API Reference

**Classes**

Name|Description
----|-----------
[SellingPartnerAPIRole](#scaleleap-selling-partner-api-cdk-sellingpartnerapirole)|IAM Role for Selling Partner API.
[SellingPartnerAPIUser](#scaleleap-selling-partner-api-cdk-sellingpartnerapiuser)|A high lever construct for setting up the AWS account for Selling Partner API.


**Structs**

Name|Description
----|-----------
[SellingPartnerAPIConstructProperties](#scaleleap-selling-partner-api-cdk-sellingpartnerapiconstructproperties)|*No description*
[SellingPartnerAPIRoleProps](#scaleleap-selling-partner-api-cdk-sellingpartnerapiroleprops)|*No description*



## class SellingPartnerAPIRole  <a id="scaleleap-selling-partner-api-cdk-sellingpartnerapirole"></a>

IAM Role for Selling Partner API.

__Implements__: [IConstruct](#constructs-iconstruct), [IConstruct](#aws-cdk-core-iconstruct), [IConstruct](#constructs-iconstruct), [IDependable](#aws-cdk-core-idependable), [IResource](#aws-cdk-core-iresource), [IConstruct](#constructs-iconstruct), [IDependable](#aws-cdk-core-idependable), [IConstruct](#aws-cdk-core-iconstruct), [IRole](#aws-cdk-aws-iam-irole), [IGrantable](#aws-cdk-aws-iam-igrantable), [IPrincipal](#aws-cdk-aws-iam-iprincipal), [IConstruct](#constructs-iconstruct), [IDependable](#aws-cdk-core-idependable), [IConstruct](#aws-cdk-core-iconstruct), [IResource](#aws-cdk-core-iresource), [IIdentity](#aws-cdk-aws-iam-iidentity)
__Extends__: [Role](#aws-cdk-aws-iam-role)

### Initializer




```ts
new SellingPartnerAPIRole(scope: Construct, id: string, props: SellingPartnerAPIRoleProps)
```

* **scope** (<code>[Construct](#aws-cdk-core-construct)</code>)  *No description*
* **id** (<code>string</code>)  *No description*
* **props** (<code>[SellingPartnerAPIRoleProps](#scaleleap-selling-partner-api-cdk-sellingpartnerapiroleprops)</code>)  *No description*
  * **assumedBy** (<code>[IPrincipal](#aws-cdk-aws-iam-iprincipal)</code>)  *No description* 




## class SellingPartnerAPIUser  <a id="scaleleap-selling-partner-api-cdk-sellingpartnerapiuser"></a>

A high lever construct for setting up the AWS account for Selling Partner API.

__Implements__: [IConstruct](#constructs-iconstruct), [IConstruct](#aws-cdk-core-iconstruct), [IConstruct](#constructs-iconstruct), [IDependable](#aws-cdk-core-idependable)
__Extends__: [Construct](#aws-cdk-core-construct)

### Initializer




```ts
new SellingPartnerAPIUser(scope: Construct, id: string, props?: SellingPartnerAPIConstructProperties)
```

* **scope** (<code>[Construct](#aws-cdk-core-construct)</code>)  *No description*
* **id** (<code>string</code>)  *No description*
* **props** (<code>[SellingPartnerAPIConstructProperties](#scaleleap-selling-partner-api-cdk-sellingpartnerapiconstructproperties)</code>)  *No description*
  * **userName** (<code>string</code>)  *No description* __*Optional*__



### Properties


Name | Type | Description 
-----|------|-------------
**role** | <code>[IRole](#aws-cdk-aws-iam-irole)</code> | <span></span>
**user** | <code>[IUser](#aws-cdk-aws-iam-iuser)</code> | <span></span>



## struct SellingPartnerAPIConstructProperties  <a id="scaleleap-selling-partner-api-cdk-sellingpartnerapiconstructproperties"></a>






Name | Type | Description 
-----|------|-------------
**userName**? | <code>string</code> | __*Optional*__



## struct SellingPartnerAPIRoleProps  <a id="scaleleap-selling-partner-api-cdk-sellingpartnerapiroleprops"></a>






Name | Type | Description 
-----|------|-------------
**assumedBy** | <code>[IPrincipal](#aws-cdk-aws-iam-iprincipal)</code> | <span></span>



