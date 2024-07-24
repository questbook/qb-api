import { Reclaim, } from '@reclaimprotocol/js-sdk'
import { logger } from 'ethers'
import { Request, Response } from 'express'
import { updateProof } from '../../src/generated/graphql'
import { executeMutation } from '../../src/utils/query'
const APP_SECRET = process.env.APP_SECRET

const providers =
    {
    	'compound': 'd2477b77-b70a-4547-9bbe-575aaa587663',
    	'twitter': '39c31ffd-0be0-4e45-9a18-1eb3cb8099d4',
    	'github': '6d3f6753-7ee6-49ee-a545-62f1b1822ae5',
    	'arbitrum': 'd8cb9070-aeef-4176-85e3-1a7291c732dd',
    	'polygon': '0820deba-f2e9-4617-95cd-29cde3e58701',
    	'axelar': 'df2659b1-390a-44b5-b5e0-ba47852d73f8',
    	'ens': '67ca45bb-4be6-4516-8d60-9d0707686b68',
    }
const APP_ID = process.env.APP_ID
const callbackURL = 'https://api.questbook.app/reclaim/verify'


const GenerateProof = async(req: Request, res: Response) => {
	try {
		const { address, type } = req.query as { address: string, type: string }
		if(!address) {
			return res.status(400).json({ error: 'address is required' })
		}

		if(!type) {
			return res.status(400).json({ error: 'Provider type is required' })
		}

		if(Object.keys(providers).indexOf(type) === -1) {
			return res.status(400).json({ error: 'Invalid provider' })
		}

		const reclaimClient = new Reclaim.ProofRequest(APP_ID)
		const providerIds = [
			providers[type as keyof typeof providers]
		]
		await reclaimClient.setAppCallbackUrl(`${callbackURL}`)
		await reclaimClient.addContext(address, type)
		await reclaimClient.buildProofRequest(providerIds[0])
		await reclaimClient.setSignature(
			await reclaimClient.generateSignature(
				APP_SECRET
			)
		)
		// set proof as empty object
		const update = await executeMutation(updateProof, {
			address: address,
			type: type,
			proof: {}
		})
		logger.info({ update }, 'Proof updated')
		const { requestUrl, statusUrl } = await reclaimClient.createVerificationRequest()
		const sessionId = await reclaimClient.sessionId
		return res.status(200).json({ requestUrl, statusUrl, sessionId })
	} catch(error) {
		logger.info({ error }, 'Error generating proof')
		return res.status(500).json({ error: error.message })
	}
}


const VerifyProof = async(req: Request, res: Response) => {
	try {
		const proof = JSON.parse(decodeURIComponent(req.body))

		const isProofVerified = await Reclaim.verifySignedProof(proof)
		if(!isProofVerified) {
			return res.status(400).send({ message: 'Proof verification failed' })
		}

		const proofData = proof.claimData.context
		const contextMessage = JSON.parse(proofData)?.contextMessage
		const contextAddress = JSON.parse(proofData)?.contextAddress
		const extractedParameters = JSON.parse(proofData)?.extractedParameters
		const newProof = {
			...proof,
			extractedParameters,
		}
		if(contextMessage && contextAddress) {
			const update = await executeMutation(updateProof, {
				address: contextAddress,
				type: contextMessage,
				proof: newProof
			})
			logger.info({ update }, 'Proof updated')
		}

		return res.status(200).send({ message: 'Proof verification successful' })
	} catch(error) {
		logger.info({ error }, 'Error verifying proof')
		return res.status(500).json({ error: error.message })
	}
}

export {
	GenerateProof,
	VerifyProof,
}