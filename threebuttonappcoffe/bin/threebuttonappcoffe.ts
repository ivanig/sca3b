#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { ThreebuttonappcoffeStack } from '../lib/threebuttonappcoffe-stack';

const app = new cdk.App();
new ThreebuttonappcoffeStack(app, 'ThreebuttonappcoffeStack');
