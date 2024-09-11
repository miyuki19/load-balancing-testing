const { v4: uuidv4 } = require('uuid')
const {
  PutCommand,
  GetCommand,
  UpdateCommand,
  DeleteCommand,
  ScanCommand,
} = require('@aws-sdk/lib-dynamodb')
const instanceDynamoDb = require('../dbs/init.dynamodb')

class NoticeService {
  constructor() {
    this.tableName = 'Notice'
    this.docClient = instanceDynamoDb.docClient
  }

  // Create a new notice
  async createNotice(data) {
    const notice = {
      id: uuidv4(),
      title: data.title,
      detail: data.detail,
      createdDate: new Date().toISOString(),
      modifiedDate: new Date().toISOString(),
    }

    const params = {
      TableName: this.tableName,
      Item: notice,
    }

    try {
      await this.docClient.send(new PutCommand(params))
      return notice
    } catch (error) {
      console.error('Error creating notice:', error)
      throw error
    }
  }

  // Get a notice by ID
  async getNoticeById(id) {
    const params = {
      TableName: this.tableName,
      Key: { id },
    }

    try {
      const result = await this.docClient.send(new GetCommand(params))
      return result.Item
    } catch (error) {
      console.error('Error retrieving notice:', error)
      throw error
    }
  }

  // Update a notice by ID
  async updateNotice(id, data) {
    const params = {
      TableName: this.tableName,
      Key: { id },
      UpdateExpression:
        'set title = :title, detail = :detail, modifiedDate = :modifiedDate',
      ExpressionAttributeValues: {
        ':title': data.title,
        ':detail': data.detail,
        ':modifiedDate': new Date().toISOString(),
      },
      ReturnValues: 'ALL_NEW',
    }

    try {
      const result = await this.docClient.send(new UpdateCommand(params))
      return result.Attributes
    } catch (error) {
      console.error('Error updating notice:', error)
      throw error
    }
  }

  // Delete a notice by ID
  async deleteNotice(id) {
    const params = {
      TableName: this.tableName,
      Key: { id },
    }

    try {
      await this.docClient.send(new DeleteCommand(params))
      return { id }
    } catch (error) {
      if (error.name === 'ResourceNotFoundException') {
        // Handle the case where the record does not exist
        return {
          status: 404,
          error: 'Record not found',
        }
      }
      return {
        status: 500,
        error: 'Internal server error',
      }
    }
  }

  // List all notices
  async listNotices() {
    const params = {
      TableName: this.tableName,
    }

    try {
      const result = await this.docClient.send(new ScanCommand(params))
      return result.Items
    } catch (error) {
      console.error('Error listing notices:', error.message)
      throw new Error(`Error listing notices: ${error.message}`)
    }
  }
}

module.exports = new NoticeService()
