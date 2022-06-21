import { ethers } from 'ethers'
import moment from 'moment'
import { CHAIN_INFO } from '../configs/chainInfo'
import { OnChainEvent } from '../configs/events'
import {
	ApplicationUpdateQuery,
	DaoCreatedQuery,
	FundSentQuery,
	GrantAppliedToQuery,
	GrantCreatedQuery,
	ReviewerAddedToGrantApplicationQuery,
	ReviewerInvitedToDaoQuery,
	ReviewerSubmittedReviewQuery,
	SupportedNetwork,
} from '../generated/graphql'
import {
	getNetworkName,
	getRewardToken,
	getSupportedChainIdFromSupportedNetwork,
} from './chainUtils'
import getFromIPFS from './ipfs'

function formatData(event: OnChainEvent, data: any) {
	switch (event) {
	case OnChainEvent.DaoCreated:
		return formatDaoCreatedData(data)

	case OnChainEvent.GrantCreated:
		return formatGrantCreatedData(data)

	case OnChainEvent.GrantAppliedTo:
		return formatGrantAppliedToData(data)

	case OnChainEvent.ApplicationUpdate:
		return formatApplicationUpdateData(data)

	case OnChainEvent.FundSent:
		return formatFundSentData(data)

		// case OnChainEvent.ReviewerAddedToGrantApplication:
		// 	return formatReviewerAddedToGrantApplicationData(data)

	case OnChainEvent.ReviewerInvitedToDao:
		return formatReviewerInvitedToDaoData(data)

	case OnChainEvent.ReviewerSubmittedReview:
		return formatReviewerSubmittedReviewData(data)

	default:
		return []
	}
}

function formatDaoCreatedData(result: DaoCreatedQuery) {
	const ret = []
	for(const data of result['workspaces']) {
		const members = data.members
		let createdBy = null
		if(members.length > 0) {
			const owner = members.find((member) => member.accessLevel === 'owner')
			if(!owner) {
				createdBy = members[0].actorId
			} else {
				createdBy = owner.actorId
			}
		}

		const retData = {
			id: `${data.id}.${data.createdAtS}`,
			daoID: data.id,
			daoName: data.title,
			daoDescription: data.about,
			chain: getNetworkName(data.chain),
			createdAt: moment.unix(data.createdAtS).format('YYYY-MM-DD HH:mm:ss'),
			createdBy,
		}

		// logger.info({ data, retData }, `${OnChainEvent.DaoCreated}: FORMAT DATA`)

		ret.push(retData)
	}

	return ret
}

function formatGrantCreatedData(result: GrantCreatedQuery) {
	const ret = []
	for(const data of result['grants']) {
		const retData = {
			id: `${data.workspace.id}.${data.id}.${data.updatedAtS}`,
			grantID: data.id,
			daoID: data.workspace.id,
			grantTitle: data.title,
			grantDescription: data.summary,
			chain: getNetworkName(data.workspace.chain),
			createdAt: moment.unix(data.createdAtS).format('YYYY-MM-DD HH:mm:ss'),
			createdBy: data.creatorId,
			amount: ethers.utils.formatUnits(
				data.reward.committed,
				data.reward.token && data.reward.token.label
					? data.reward.token.decimal
					: CHAIN_INFO[
						getSupportedChainIdFromSupportedNetwork(
                data.workspace.chain[0] as SupportedNetwork,
						)
					].supportedCurrencies[data.reward.asset.toLowerCase()].decimal,
			),
			currency: getRewardToken(
				data.reward,
				getSupportedChainIdFromSupportedNetwork(
          data.workspace.chain[0] as SupportedNetwork,
				),
			),
		}

		// logger.info({ data, retData }, `${OnChainEvent.GrantCreated}: FORMAT DATA`)

		ret.push(retData)
	}

	return ret
}

function formatGrantAppliedToData(result: GrantAppliedToQuery) {
	const ret = []
	for(const grant of result['grants']) {
		for(const data of grant.applications) {
			const retData = {
				id: `${grant.id}.${data.id}.${data.updatedAtS}`,
				applicationID: data.id,
				grantID: grant.id,
				grantTitle: grant.title,
				daoID: grant.workspace.id,
				title: data.projectName[0].values[0].title,
				createdAt: moment.unix(data.createdAtS).format('YYYY-MM-DD HH:mm:ss'),
				createdBy: data.createdBy,
				chain: getNetworkName(grant.workspace.chain),
				publicEmail:
        data.applicantEmail.length > 0
        	? data.applicantEmail[0].values[0].email
        	: null,
				askAmount: ethers.utils.formatUnits(
					grant.reward.committed,
					grant.reward.token && grant.reward.token.label
						? grant.reward.token.decimal
						: CHAIN_INFO[
							getSupportedChainIdFromSupportedNetwork(
                grant.workspace.chain[0] as SupportedNetwork,
							)
						].supportedCurrencies[grant.reward.asset.toLowerCase()].decimal,
				),
				currency: getRewardToken(
					grant.reward,
					getSupportedChainIdFromSupportedNetwork(
          grant.workspace.chain[0] as SupportedNetwork,
					),
				),
				milestones: data.milestones.map((milestone) => {
					return {
						milestoneID: milestone.id,
						title: milestone.title,
						amount: ethers.utils.formatUnits(
							milestone.amount,
							grant.reward.token && grant.reward.token.label
								? grant.reward.token.decimal
								: CHAIN_INFO[
									getSupportedChainIdFromSupportedNetwork(
                    grant.workspace.chain[0] as SupportedNetwork,
									)
								].supportedCurrencies[grant.reward.asset.toLowerCase()].decimal,
						),
						amountPaid: ethers.utils.formatUnits(
							milestone.amountPaid,
							grant.reward.token && grant.reward.token.label
								? grant.reward.token.decimal
								: CHAIN_INFO[
									getSupportedChainIdFromSupportedNetwork(
                    grant.workspace.chain[0] as SupportedNetwork,
									)
								].supportedCurrencies[grant.reward.asset.toLowerCase()].decimal,
						),
						state: milestone.state,
						feedbackFromDao: milestone.feedbackFromDAO,
						feedbackFromDev: milestone.feedbackFromDev,
					}
				}),
			}

			// logger.info({ data, retData }, `${OnChainEvent.GrantAppliedTo}: FORMAT DATA`)

			ret.push(retData)
		}
	}

	return ret
}

function formatApplicationUpdateData(result: ApplicationUpdateQuery) {
	const ret = []
	for(const grant of result['grants']) {
		for(const data of grant.applications) {
			const retData = {
				id: `${data.id}.${grant.id}.${data.updatedAtS}`,
				applicationID: data.id,
				title: data.projectName[0].values[0].title,
				grantID: grant.id,
				grantTitle: grant.title,
				daoID: grant.workspace.id,
				chain: getNetworkName(grant.workspace.chain),
				state: data.state,
				feedback: data.feedbackDao,
				updatedAt: moment.unix(data.updatedAtS).format('YYYY-MM-DD HH:mm:ss'),
			}

			// logger.info({ data, retData }, `${OnChainEvent.ApplicationUpdate}: FORMAT DATA`)

			ret.push(retData)
		}
	}

	return ret
}

function formatFundSentData(result: FundSentQuery) {
	const ret = []
	for(const grant of result['grants']) {
		for(const data of grant.fundTransfers) {
			const retData = {
				id: `${grant.id}.${data.id}`,
				grantID: grant.id,
				daoID: grant.workspace.id,
				milestoneID: data.milestone.id,
				chain: getNetworkName(grant.workspace.chain),
				amount: ethers.utils.formatUnits(
					data.milestone.amount,
					grant.reward.token && grant.reward.token.label
						? grant.reward.token.decimal
						: CHAIN_INFO[
							getSupportedChainIdFromSupportedNetwork(
                  grant.workspace.chain[0] as SupportedNetwork,
							)
						].supportedCurrencies[grant.reward.asset.toLowerCase()].decimal,
				),
				amountPaid: ethers.utils.formatUnits(
					data.milestone.amountPaid,
					grant.reward.token && grant.reward.token.label
						? grant.reward.token.decimal
						: CHAIN_INFO[
							getSupportedChainIdFromSupportedNetwork(
                  grant.workspace.chain[0] as SupportedNetwork,
							)
						].supportedCurrencies[grant.reward.asset.toLowerCase()].decimal,
				),
				currency: getRewardToken(
					grant.reward,
					getSupportedChainIdFromSupportedNetwork(
            grant.workspace.chain[0] as SupportedNetwork,
					),
				),
			}

			// logger.info({ data, retData }, `${OnChainEvent.FundSent}: FORMAT DATA`)

			ret.push(retData)
		}
	}

	return ret
}

function formatReviewerAddedToGrantApplicationData(
	result: ReviewerAddedToGrantApplicationQuery,
) {
	// TODO: Need to update query and format function
	return result
}

function formatReviewerInvitedToDaoData(result: ReviewerInvitedToDaoQuery) {
	const ret = []
	for(const data of result['workspaceMembers']) {
		const retData = {
			id: `${data.id}.${data.updatedAt}`,
			address: data.actorId,
			chain: getNetworkName(data.workspace.chain),
			email: data.email,
			workspaceId: data.workspace.id,
			updatedAt: moment.unix(data.updatedAt).format('YYYY-MM-DD HH:mm:ss'),
		}

		// logger.info({ data, retData }, `${OnChainEvent.ReviewerInvitedToDao}: FORMAT DATA`)

		ret.push(retData)
	}

	return ret
}

async function formatReviewerSubmittedReviewData(
	result: ReviewerSubmittedReviewQuery,
) {
	const ret = []
	for(const grant of result['grants']) {
		for(const application of grant.applications) {
			for(const data of application.reviews) {
				const stringData = data.publicReviewDataHash
					? await getFromIPFS(data.publicReviewDataHash)
					: ''
				let json = {}
				try {
					json = JSON.parse(stringData)
				} catch(e) {}

				if(!data.reviewer) {
					continue
				}

				const retData = {
					id: `${grant.id}.${application.id}.${data.id}.${data.createdAtS}`,
					daoID: data.reviewer.workspace.id,
					grantID: grant.id,
					applicationID: application.id,
					chain: getNetworkName(data.reviewer.workspace.chain),
					isApproved: json['isApproved'],
					rawData: stringData,
				}

				// logger.info({ data, retData }, `${OnChainEvent.ReviewerSubmittedReview}: FORMAT DATA`)

				ret.push(retData)
			}
		}
	}

	return ret
}

export default formatData
