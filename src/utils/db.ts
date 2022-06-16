const AWS = require('aws-sdk')

const dynamo = new AWS.DynamoDB.DocumentClient()

const Pino = require('pino')

const logger = Pino()

const TABLE = 'communication-touchpoints'

export async function getItem(key: string): Promise<number> {
	logger.info({ key }, 'Fetching key')
	const result = await dynamo
		.get({
			TableName: TABLE,
			Key: {
				id: key,
			},
		})
		.promise()
	logger.info({ key, result }, 'Fetched key')
	if(result.Item) {
		return result.Item.timestamp
	}

	return -1
}

export async function setItem(key: string, timestamp: number): Promise<void> {
	logger.info({ key, timestamp }, 'Setting key')
	const updated = await dynamo
		.put({
			TableName: TABLE,
			Item: {
				id: key,
				timestamp,
			},
		})
		.promise()
	logger.info({ key, timestamp, updated }, 'Set key')
}
