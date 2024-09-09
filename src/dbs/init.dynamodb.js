const { DynamoDBClient } = require('@aws-sdk/client-dynamodb')
const { DynamoDBDocumentClient } = require('@aws-sdk/lib-dynamodb')
const config = require('../configs/config.app')

class Database {
  constructor() {
    this.dynamodb = new DynamoDBClient({
      region: config.dynamodb.region,
      credentials: {
        accessKeyId: config.dynamodb.accessKey,
        secretAccessKey: config.dynamodb.secretAccessKey,
      },
      endpoint: config.dynamodb.endpoint,
    })
    this.docClient = DynamoDBDocumentClient.from(this.dynamodb)
    this.connect()
  }

  connect() {
    try {
      console.log('Connected to DynamoDB!')
    } catch (err) {
      console.log('Connect to DynamoDB Error:', err)
    }
  }

  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database()
    }

    return Database.instance
  }
}

const instanceDynamoDb = Database.getInstance()

module.exports = instanceDynamoDb
