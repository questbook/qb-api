import { ApplicationUpdateDocument, DaoCreatedDocument, FundSentDocument, GrantAppliedToDocument, GrantCreatedDocument, ReviewerAddedToGrantApplicationDocument, ReviewerInvitedToDaoDocument, ReviewerSubmittedReviewDocument } from '../generated/graphql'
import formatData from './dataFormat'
import executeQuery from './query'

const Pino = require('pino')

const logger = Pino()

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function fetchData(type: string, chainId: string, variables?: {[key: string]: any}) {
	let documentNode = null
	switch (type) {
	case 'DaoCreated':
		documentNode = DaoCreatedDocument
		break

	case 'GrantCreated':
		documentNode = GrantCreatedDocument
		break

	case 'GrantAppliedTo':
		documentNode = GrantAppliedToDocument
		break

	case 'ApplicationUpdate':
		documentNode = ApplicationUpdateDocument
		break

	case 'FundSent':
		documentNode = FundSentDocument
		break

	case 'ReviewerInvitedToDao':
		documentNode = ReviewerInvitedToDaoDocument
		break

	case 'ReviewerAddedToGrantApplication':
		documentNode = ReviewerAddedToGrantApplicationDocument
		break

	case 'ReviewerSubmittedReview':
		documentNode = ReviewerSubmittedReviewDocument
		break

	default:
		break
	}

	if(!documentNode) {
		logger.info(`NO DOCUMENT NODE FOUND FOR ${type.toString()}`)
		return null
	}

	const time = new Date()
	const toTimestamp = Math.floor(time.getTime() / 1000)
	let data = []
	let count = 0
	// for(const chainId of ALL_SUPPORTED_CHAIN_IDS) {
	const fromTimestamp = Math.floor((time.getTime() - 30 * 24 * 60 * 60 * 1000) / 1000)
	// const fromTimestamp = 0

	logger.info({ fromTimestamp, toTimestamp, chainId }, `${type.toString()}: Fetching data from graphQL`)
	const result = await executeQuery(
		chainId,
		fromTimestamp,
		toTimestamp,
		documentNode,
		type,
		variables,
	)
	const ret = await formatData(type, result)
	count += ret.length
	data = [...data, ...ret]
	// }

	// data.sort((a, b) => b.timestamp - a.timestamp)
	// const returnData = data.map((d) => d.data)

	return { data, count, toTimestamp }
}
