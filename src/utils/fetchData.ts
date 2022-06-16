import { OnChainEvent } from '../configs/events'
import { ApplicationUpdateDocument, DaoCreatedDocument, FundSentDocument, GrantAppliedToDocument, GrantCreatedDocument, ReviewerAddedToGrantApplicationDocument, ReviewerInvitedToDaoDocument, ReviewerSubmittedReviewDocument } from '../generated/graphql'
import formatData from './dataFormat'
import { executeQuery } from './query'

const Pino = require('pino')

const logger = Pino()

export async function fetchData(type: OnChainEvent, chainId: number, variables?: {[key: string]: any}) {
	let documentNode = null
	switch (type) {
	case OnChainEvent.DaoCreated:
		documentNode = DaoCreatedDocument
		break

	case OnChainEvent.GrantCreated:
		documentNode = GrantCreatedDocument
		break

	case OnChainEvent.GrantAppliedTo:
		documentNode = GrantAppliedToDocument
		break

	case OnChainEvent.ApplicationUpdate:
		documentNode = ApplicationUpdateDocument
		break

	case OnChainEvent.FundSent:
		documentNode = FundSentDocument
		break

	case OnChainEvent.ReviewerInvitedToDao:
		documentNode = ReviewerInvitedToDaoDocument
		break

	case OnChainEvent.ReviewerAddedToGrantApplication:
		documentNode = ReviewerAddedToGrantApplicationDocument
		break

	case OnChainEvent.ReviewerSubmittedReview:
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
	// const fromTimestamp = Math.floor((time.getTime() - 30 * 24 * 60 * 60 * 1000) / 1000)
	const fromTimestamp = 0

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
