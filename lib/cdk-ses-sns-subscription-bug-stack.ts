import * as cdk from 'aws-cdk-lib';
import { ConfigurationSet, EventDestination } from 'aws-cdk-lib/aws-ses';
import { Topic } from 'aws-cdk-lib/aws-sns';
import { Construct } from 'constructs';

export class CdkSesSnsSubscriptionBugStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const topic = new Topic(this, 'test-topic', {fifo: false});
    const configSet = new ConfigurationSet(this, "test-config-set", {
      configurationSetName: "test-config-set"
    });
    
    configSet.addEventDestination("test-sns-destination", {
      destination: EventDestination.snsTopic(topic)
    });
  }
}
