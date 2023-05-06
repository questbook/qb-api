import 'dotenv/config'
import { ZapierEvent } from '../types'
import { fetchData } from './fetchData'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function work(type: ZapierEvent, chain: string, variables?: {[key: string]: any}) {
	// Call graphQL endpoint and get the data from all chains
	const { data } = await fetchData(type, chain, variables)
	// logger.info({ data }, `${type}: Data from all chains`)

	return data
}
