 
//snippet-sourcedescription:[emc_getendpoint.js demonstrates how to retrieve information about the endpoints for an AWS account.]
//snippet-keyword:[JavaScript]
//snippet-keyword:[Code Sample]
//snippet-keyword:[AWS Elemental MediaConvert]
//snippet-service:[mediaconvert]
//snippet-sourcetype:[full-example]
//snippet-sourcedate:[2018-06-02]
//snippet-sourceauthor:[daviddeyo]


// Copyright 2010-2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// Licensed under the Apache-2.0 License on an "AS IS" BASIS, WITHOUT WARRANTIES OF ANY KIND.   

// ABOUT THIS NODE.JS SAMPLE: This sample is part of the SDK for JavaScript Developer Guide topic at
// https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/emc-examples-getendpoint.html
// Load the SDK for JavaScript
var AWS = require('aws-sdk');
// Set the region 
AWS.config.update({region: 'us-west-2'});

// Create empty request parameters
var params = {
  MaxResults: 0,
};

// Create a promise on a MediaConvert object
var endpointPromise = new AWS.MediaConvert({apiVersion: '2017-08-29'}).describeEndpoints(params).promise();


endpointPromise.then(
  function(data) {
    console.log("Your MediaConvert endpoint is ", data.Endpoints);
  },
  function(err) {
    console.log("Error", err);
  }
);