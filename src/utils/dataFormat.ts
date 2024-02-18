import {
	GrantApplication,
	PayoutStatusQuery,
	ProposalSubmittedQuery,
	ProposalUpdatedQuery,
	ReviewerSubmittedReviewQuery,
	SupportedNetwork,
} from '../generated/graphql'
import { ZapierEvent } from '../types'
import {
	getRewardToken,
	getSupportedChainIdFromSupportedNetwork,
} from './chainUtils'
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
		const fieldMap: { [key: string]: string } = {}
		for(const field of application.fields) {
			if(field.id.includes('customField') && field.values.length > 0) {
				fieldMap[field.id.split('-')[1]] = field.values[0].value
			} else if(field.values.length > 0) {
				fieldMap[
					field.id
						.split('.')[1]
						.replace(/([A-Z])/g, ' $1')
						.trim()
						.replace(/^./, (str) => str.toUpperCase())
				] = field?.id?.split('.')[1].trim() === 'projectDetails' ?
					//@ts-ignore
					 typeof field?.values[0]?.value === 'string' ? JSON.parse(field?.values[0]?.value)?.blocks?.map((block: { text: string }) => block.text).join() : field?.values[0]?.value?.blocks?.map((block) => block.text).join() : field.values[0].value
			}
		}

		const retData = {
			id: `${grant.id}.${application.id}.${application.updatedAtS}`,
			applicationID: application.id,
			applicantWalletAddress: application.walletAddress,
			grantID: grant.id,
			grantTitle: grant.title,
			title: getFieldString(application, 'projectName'),
			createdAt: formatTime(application.createdAtS),
			createdBy: application.createdBy,
			state: application.state,
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
					details: milestone.details ?? '',
					deadline: milestone.deadline ?? '',
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
			fields: {
				...fieldMap,
			},
			nextPayoutAmount: application.milestones[0]?.amount ?? 0,
			nextPayoutDate: application.milestones[0]?.deadline ?? '',
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
		const fieldMap: { [key: string]: string } = {}
		for(const field of application.fields) {
			if(field.id.includes('customField') && field.values.length > 0) {
				fieldMap[field.id.split('-')[1]] = field.values[0].value
			} else if(field.values.length > 0) {
				fieldMap[
					field.id
						.split('.')[1]
						.replace(/([A-Z])/g, ' $1')
						.trim()
						.replace(/^./, (str) => str.toUpperCase())
				] = field?.id?.split('.')[1].trim() === 'projectDetails' ?
				//@ts-ignore
				 typeof field?.values[0]?.value === 'string' ? JSON.parse(field?.values[0]?.value)?.blocks?.map((block: { text: string }) => block.text).join() : field?.values[0]?.value?.blocks?.map((block) => block.text).join() : field.values[0].value
			}
		}

		const retData = {
			id: `${application.id}.${grant.id}.${application.updatedAtS}`,
			applicationID: application.id,
			applicantWalletAddress: application.walletAddress,
			title: getFieldString(application, 'projectName'),
			grantID: grant.id,
			grantTitle: grant.title,
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
					details: milestone.details ?? '',
					deadline: milestone.deadline ?? '',
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
			fields: {
				...fieldMap,
			},
			nextPayoutAmount: application.milestones[0]?.amount ?? 0,
			nextPayoutDate: application.milestones[0]?.deadline ?? '',
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
			milestoneID: fundTransfer.milestone.id,
			milestoneTitle: fundTransfer.milestone.title,
			applicationID: fundTransfer.application.id,
			applicationTitle: fundTransfer.application.projectName[0].values[0].title,
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
			nextPayoutAmount: parseInt(fundTransfer?.milestone?.id?.split('.')[1]) === fundTransfer?.application?.milestones?.length - 1 ?
				0 : fundTransfer?.application?.milestones[parseInt(fundTransfer?.milestone?.id?.split('.')[1]) + 1]?.amount ?? 0,
			nextMilestone: parseInt(fundTransfer?.milestone?.id?.split('.')[1]) === fundTransfer?.application?.milestones?.length - 1 ? parseInt(fundTransfer?.milestone?.id?.split('.')[1]) + 1 :
				parseInt(fundTransfer?.milestone?.id?.split('.')[1]) + 2,
			nextPayoutDate: parseInt(fundTransfer?.milestone?.id?.split('.')[1]) === fundTransfer?.application?.milestones?.length - 1 ?
				'' : fundTransfer?.application?.milestones[parseInt(fundTransfer?.milestone?.id?.split('.')[1]) + 1]?.deadline ?? '',
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
				? (review.publicReviewDataHash)
				: ''
			let json = {}
			try {
				json = typeof stringData === 'string' ? JSON.parse(stringData) : stringData
			} catch(e) {}

			if(!review.reviewer) {
				continue
			}

			const retData = {
				id: `${grant.id}.${application.id}.${review.id}.${review.createdAtS}`,
				grantID: grant.id,
				applicationID: application.id,
				isApproved: json['isApproved'],
				reviews: [...json['items']],
			}

			// logger.info({ data, retData }, `${ReviewerSubmittedReview}: FORMAT DATA`)

			ret.push(retData)
		}
	}

	return ret
}

export const getFieldString = (
	applicationData:
    | {
        fields: (Pick<GrantApplication['fields'][number], 'id'> & {
          values: Pick<
            GrantApplication['fields'][number]['values'][number],
            'id' | 'value'
          >[]
        })[]
      }
    | undefined
    | null,
	name: string
): string | undefined => {
	return applicationData?.fields?.find((field) => field?.id?.includes(`.${name}`)
	)?.values[0]?.value
}

export default formatData
