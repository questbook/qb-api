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
import { formatTime } from './timeUtils'
import { getTokenDetails, getTotalValue } from './tokenUtils'

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
	for(const workspace of result['workspaces']) {
		const members = workspace.members
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
			id: `${workspace.id}.${workspace.createdAtS}`,
			daoID: workspace.id,
			daoName: workspace.title,
			daoDescription: workspace.about,
			chain: getNetworkName(workspace.chain),
			createdAt: formatTime(workspace.createdAtS),
			createdBy,
		}

		// logger.info({ data, retData }, `${OnChainEvent.DaoCreated}: FORMAT DATA`)

		ret.push(retData)
	}

	return ret
}

function formatGrantCreatedData(result: GrantCreatedQuery) {
	const ret = []
	for(const grant of result['grants']) {
		const retData = {
			id: `${grant.workspace.id}.${grant.id}.${grant.updatedAtS}`,
			grantID: grant.id,
			daoID: grant.workspace.id,
			grantTitle: grant.title,
			grantDescription: grant.summary,
			chain: getNetworkName(grant.workspace.chain),
			createdAt: formatTime(grant.createdAtS),
			createdBy: grant.creatorId,
			amount: getTokenDetails(
				grant.reward.committed,
				grant.reward,
        grant.workspace.chain[0] as SupportedNetwork,
			),
			currency: getRewardToken(
				grant.reward,
				getSupportedChainIdFromSupportedNetwork(
          grant.workspace.chain[0] as SupportedNetwork,
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
		for(const application of grant.applications) {
			const retData = {
				id: `${grant.id}.${application.id}.${application.updatedAtS}`,
				applicationID: application.id,
				grantID: grant.id,
				grantTitle: grant.title,
				daoID: grant.workspace.id,
				title: application.projectName[0].values[0].title,
				createdAt: formatTime(application.createdAtS),
				createdBy: application.createdBy,
				chain: getNetworkName(grant.workspace.chain),
				state: application.state,
				publicEmail:
          application.applicantEmail.length > 0
          	? application.applicantEmail[0].values[0].email
          	: null,
				fundingAsk: getTokenDetails(
					application.fundingAsked[0].values[0].fundingAsk,
					grant.reward,
          grant.workspace.chain[0] as SupportedNetwork,
				),
				currency: getRewardToken(
					grant.reward,
					getSupportedChainIdFromSupportedNetwork(
            grant.workspace.chain[0] as SupportedNetwork,
					),
				),
				milestones: application.milestones.map((milestone) => {
					return {
						milestoneID: milestone.id,
						title: milestone.title,
						amount: getTokenDetails(
							milestone.amount,
							grant.reward,
              grant.workspace.chain[0] as SupportedNetwork,
						),
						amountPaid: getTokenDetails(
							milestone.amountPaid,
							grant.reward,
              grant.workspace.chain[0] as SupportedNetwork,
						),
						state: milestone.state,
						feedbackFromDao: milestone.feedbackFromDAO,
						feedbackFromDev: milestone.feedbackFromDev,
					}
				}),
        totalMilestoneAmount: getTokenDetails(getTotalValue(application.milestones.map((milestone) => milestone.amount)), grant.reward, grant.workspace.chain[0] as SupportedNetwork),
        totalMilestoneAmountPaid: getTokenDetails(getTotalValue(application.milestones.map((milestone) => milestone.amountPaid)), grant.reward, grant.workspace.chain[0] as SupportedNetwork),
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
		for(const application of grant.applications) {
			const retData = {
				id: `${application.id}.${grant.id}.${application.updatedAtS}`,
				applicationID: application.id,
				title: application.projectName[0].values[0].title,
				grantID: grant.id,
				grantTitle: grant.title,
				daoID: grant.workspace.id,
				chain: getNetworkName(grant.workspace.chain),
				state: application.state,
				feedback: application.feedbackDao,
				fundingAsk: getTokenDetails(
					application.fundingAsked[0].values[0].fundingAsk,
					grant.reward,
          grant.workspace.chain[0] as SupportedNetwork,
				),
				currency: getRewardToken(
					grant.reward,
					getSupportedChainIdFromSupportedNetwork(
            grant.workspace.chain[0] as SupportedNetwork,
					),
				),
				updatedAt: formatTime(application.updatedAtS),
        milestones: application.milestones.map((milestone) => {
					return {
						milestoneID: milestone.id,
						title: milestone.title,
						amount: getTokenDetails(
							milestone.amount,
							grant.reward,
              grant.workspace.chain[0] as SupportedNetwork,
						),
						amountPaid: getTokenDetails(
							milestone.amountPaid,
							grant.reward,
              grant.workspace.chain[0] as SupportedNetwork,
						),
						state: milestone.state,
						feedbackFromDao: milestone.feedbackFromDAO,
						feedbackFromDev: milestone.feedbackFromDev,
					}
				}),
        totalMilestoneAmount: getTokenDetails(getTotalValue(application.milestones.map((milestone) => milestone.amount)), grant.reward, grant.workspace.chain[0] as SupportedNetwork),
        totalMilestoneAmountPaid: getTokenDetails(getTotalValue(application.milestones.map((milestone) => milestone.amountPaid)), grant.reward, grant.workspace.chain[0] as SupportedNetwork),
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
		for(const fundTransfer of grant.fundTransfers) {
			const retData = {
				id: `${grant.id}.${fundTransfer.id}`,
				grantID: grant.id,
				daoID: grant.workspace.id,
				milestoneID: fundTransfer.milestone.id,
				milestoneTitle: fundTransfer.milestone.title,
				applicationID: fundTransfer.application.id,
				applicationTitle:
          fundTransfer.application.projectName[0].values[0].title,
				chain: getNetworkName(grant.workspace.chain),
				amount: getTokenDetails(
					fundTransfer.milestone.amount,
					grant.reward,
          grant.workspace.chain[0] as SupportedNetwork,
				),
				amountPaid: getTokenDetails(
					fundTransfer.milestone.amountPaid,
					grant.reward,
          grant.workspace.chain[0] as SupportedNetwork,
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
	for(const workspaceMember of result['workspaceMembers']) {
		const retData = {
			id: `${workspaceMember.id}.${workspaceMember.updatedAt}`,
			address: workspaceMember.actorId,
			chain: getNetworkName(workspaceMember.workspace.chain),
			email: workspaceMember.email,
			workspaceId: workspaceMember.workspace.id,
			updatedAt: formatTime(workspaceMember.updatedAt),
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
			for(const review of application.reviews) {
				const stringData = review.publicReviewDataHash
					? await getFromIPFS(review.publicReviewDataHash)
					: ''
				let json = {}
				try {
					json = JSON.parse(stringData)
				} catch(e) {}

				if(!review.reviewer) {
					continue
				}

				const retData = {
					id: `${grant.id}.${application.id}.${review.id}.${review.createdAtS}`,
					daoID: review.reviewer.workspace.id,
					grantID: grant.id,
					applicationID: application.id,
					chain: getNetworkName(review.reviewer.workspace.chain),
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
