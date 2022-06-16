import 'dotenv/config'
import { OnChainEvent } from '../configs/events'
import { fetchData } from './fetchData'

const Pino = require('pino')

const logger = Pino()

export async function work(type: OnChainEvent, chain: number, variables?: {[key: string]: any}) {
	// Call graphQL endpoint and get the data from all chains
	const { data, count, toTimestamp } = await fetchData(type, chain, variables)
	// logger.info({ data }, `${type}: Data from all chains`)

	return {data, count, 'timestamp': toTimestamp}
}
