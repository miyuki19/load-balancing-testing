'use strict'

const config = {
  app: {
    port: process.env.APP_PORT || 3005,
  },
  dynamodb: {
    region: process.env.DYNAMO_REGION || 'us-east-1',
    accessKey: process.env.DYNAMO_ACCESS_KEY || '',
    secretAccessKey: process.env.DYNAMO_SECRET_KEY,
    endpoint:
      process.env.DYNAMO_ENDPOINT || 'https://dynamodb.us-east-1.amazonaws.com',
  },
}

module.exports = config
