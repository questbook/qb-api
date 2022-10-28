import {
	ApolloClient,
	DocumentNode,
	HttpLink,
	InMemoryCache,
} from '@apollo/client'
import fetch from 'cross-fetch'
import { CHAIN_INFO } from '../configs/chains'

async function executeQuery(
	chainId: string,
	from: number,
	to: number,
	query: DocumentNode,
	type: string,
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	variables: {[key: string]: any} = {},
) {
	// logger.info({ chainId, from, to }, `${type}: Executing query`)
	const link = new HttpLink({
		uri: CHAIN_INFO[chainId].subgraphClientUrl,
		fetch,
	})
	const client = new ApolloClient({
		link,
		cache: new InMemoryCache(),
	})

	const response = await client.query({
		query,
		fetchPolicy: 'network-only',
		variables: {
			lowerLimit: from,
			upperLimit: to,
			...variables,
		},
	})
	const { data } = response
	// logger.info({
	// 	chainId, from, to, data,
	// }, `${type}: Executed query`)

	return data
}

export default executeQuery
