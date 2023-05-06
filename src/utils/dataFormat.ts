import {
	PayoutStatusQuery,
	ProposalSubmittedQuery,
	ProposalUpdatedQuery,
	ReviewerSubmittedReviewQuery,
	SupportedNetwork,
} from '../generated/graphql'
import { ZapierEvent } from '../types'
import {
	getNetworkName,
	getRewardToken,
	getSupportedChainIdFromSupportedNetwork,
} from './chainUtils'
import getFromIPFS from './ipfs'
import { formatTime } from './timeUtils'
import { getTokenDetails, getTotalValue } from './tokenUtils'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function formatData(event: ZapierEvent, data: any) {
	switch (event) {
	case 'ProposalSubmitted':
		return formatProposalSubmittedData(data)

	case 'ProposalUpdated':
		return formatProposalUpdatedData(data)

	case 'PayoutStatus':
		return formatPayoutStatusData(data)

	case 'ReviewerSubmittedReview':
		return formatReviewerSubmittedReviewData(data)

	default:
		return []
	}
}

function formatProposalSubmittedData(result: ProposalSubmittedQuery) {
	const ret = []
	const grant = result.grant
	if(!grant) {
		return []
	}

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
			currency: getRewardToken(
				grant.reward,
				getSupportedChainIdFromSupportedNetwork(
          grant.workspace.chain[0] as SupportedNetwork
				)
			),
			milestones: application.milestones.map((milestone) => {
				return {
					milestoneID: milestone.id,
					title: milestone.title,
					amount: getTokenDetails(
						milestone.amount,
						grant.reward,
            grant.workspace.chain[0] as SupportedNetwork
					),
					amountPaid: getTokenDetails(
						milestone.amountPaid,
						grant.reward,
            grant.workspace.chain[0] as SupportedNetwork
					),
					state: milestone.state,
					feedbackFromDao: milestone.feedbackFromDAO,
					feedbackFromDev: milestone.feedbackFromDev,
				}
			}),
			totalMilestoneAmount: getTokenDetails(
				getTotalValue(
					application.milestones.map((milestone) => milestone.amount)
				),
				grant.reward,
        grant.workspace.chain[0] as SupportedNetwork
			),
			totalMilestoneAmountPaid: getTokenDetails(
				getTotalValue(
					application.milestones.map((milestone) => milestone.amountPaid)
				),
				grant.reward,
        grant.workspace.chain[0] as SupportedNetwork
			),
		}

		// logger.info({ data, retData }, `${GrantAppliedTo}: FORMAT DATA`)

		ret.push(retData)
	}

	return ret
}

function formatProposalUpdatedData(result: ProposalUpdatedQuery) {
	const ret = []
	const grant = result.grant
	if(!grant) {
		return []
	}

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
			currency: getRewardToken(
				grant.reward,
				getSupportedChainIdFromSupportedNetwork(
          grant.workspace.chain[0] as SupportedNetwork
				)
			),
			updatedAt: formatTime(application.updatedAtS),
			milestones: application.milestones.map((milestone) => {
				return {
					milestoneID: milestone.id,
					title: milestone.title,
					amount: getTokenDetails(
						milestone.amount,
						grant.reward,
            grant.workspace.chain[0] as SupportedNetwork
					),
					amountPaid: getTokenDetails(
						milestone.amountPaid,
						grant.reward,
            grant.workspace.chain[0] as SupportedNetwork
					),
					state: milestone.state,
					feedbackFromDao: milestone.feedbackFromDAO,
					feedbackFromDev: milestone.feedbackFromDev,
				}
			}),
			totalMilestoneAmount: getTokenDetails(
				getTotalValue(
					application.milestones.map((milestone) => milestone.amount)
				),
				grant.reward,
        grant.workspace.chain[0] as SupportedNetwork
			),
			totalMilestoneAmountPaid: getTokenDetails(
				getTotalValue(
					application.milestones.map((milestone) => milestone.amountPaid)
				),
				grant.reward,
        grant.workspace.chain[0] as SupportedNetwork
			),
		}

		// logger.info({ data, retData }, `${ApplicationUpdate}: FORMAT DATA`)

		ret.push(retData)
	}

	return ret
}

function formatPayoutStatusData(result: PayoutStatusQuery) {
	const ret = []
	const grant = result.grant
	if(!grant) {
		return []
	}

	for(const fundTransfer of grant.fundTransfers) {
		const retData = {
			id: `${grant.id}.${fundTransfer.id}`,
			grantID: grant.id,
			daoID: grant.workspace.id,
			milestoneID: fundTransfer.milestone.id,
			milestoneTitle: fundTransfer.milestone.title,
			applicationID: fundTransfer.application.id,
			applicationTitle: fundTransfer.application.projectName[0].values[0].title,
			chain: getNetworkName(grant.workspace.chain),
			amountPaid: getTokenDetails(
				fundTransfer.amount,
				grant.reward,
        grant.workspace.chain[0] as SupportedNetwork
			),
			amount: getTokenDetails(
				fundTransfer.milestone.amount,
				grant.reward,
        grant.workspace.chain[0] as SupportedNetwork
			),
			currency: getRewardToken(
				grant.reward,
				getSupportedChainIdFromSupportedNetwork(
          grant.workspace.chain[0] as SupportedNetwork
				)
			),
			status: fundTransfer.status,
		}

		// logger.info({ data, retData }, `${FundSent}: FORMAT DATA`)

		ret.push(retData)
	}

	return ret
}

async function formatReviewerSubmittedReviewData(
	result: ReviewerSubmittedReviewQuery
) {
	const ret = []
	const grant = result.grant
	if(!grant) {
		return []
	}

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
				reviews: [...json['items']],
			}

			// logger.info({ data, retData }, `${ReviewerSubmittedReview}: FORMAT DATA`)

			ret.push(retData)
		}
	}

	return ret
}

export default formatData
