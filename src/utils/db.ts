import 'dotenv/config'
import { Mapping } from '../types/mapping'

const AWS = require('aws-sdk')

const TABLE = process.env.TABLE_NAME
const dynamo = new AWS.DynamoDB.DocumentClient()

async function doesMappingExist(id: string, from: string, to: string): Promise<Mapping> {
	try {
		const result = await dynamo
			.get({
				TableName: TABLE,
				Key: {
					id,
				},
			})
			.promise()
		if(!result.Item) {
			return { message: 'ID not present', value: false }
		} else if(result.Item['from'] === from && result.Item['to'] === to) {
			return { message: 'Mapping exists', value: true }
		} else {
			return { message: 'Mapping does not exist', value: false }
		}
	} catch(err) {
		console.error(err)
		return { error: err, value: false }
	}
}

async function createMapping(id: string, from: string, to: string): Promise<Mapping> {
	try {
		const result = await dynamo
			.put({
				TableName: TABLE,
				Item: {
					id,
					from,
					to,
				},
			})
			.promise()
		console.log(result)
		return { message: 'Mapping created', value: true }
	} catch(err) {
		console.error(err)
		return { error: err, value: true }
	}
}

export { doesMappingExist, createMapping }