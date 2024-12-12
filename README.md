# An AWS CDK project with a SES->SNS subscription bug in CloudFormation 

## Bug description

This CDK project contains the following infrastructure:
1. SNS topic
2. SES configuration set
3. A configuration set's destination to the SNS topic

If you try to deploy this CDK project to an AWS account, you will see the following error:

```
Resource handler returned message: "Cannot invoke "software.amazon.awssdk.services.ses.model.KinesisFirehoseDestination.iamRoleARN()" because the return value of "software.amazon.awssdk.services.ses.model.EventDestination.kinesisFirehoseDestination()" is null" (RequestToken: ..., HandlerErrorCode: InternalFailure)
```

I expect the resource creation to be completed successfully.

The event destination contains only a link to the SNS topic. No Kinesis Firehose been mentioned.

`stack.yml` contains the synthesized CloudFormation stack.

## How to run the project

* `npm ci` - install dependencies
* Set AWS credentials using environment variables or aws-cli profile
* `npx cdk synth`   emits the synthesized CloudFormation template
* `npx cdk deploy` - deploy this stack to your default AWS account/region
* `npx cdk diff`    compare deployed stack with current state
