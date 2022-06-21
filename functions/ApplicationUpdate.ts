import { Request, Response } from "express";
import { SupportedChainId } from "../src/configs/chains";
import { OnChainEvent } from "../src/configs/events";
import { work } from "../src/utils/work";

async function applicationUpdate(req: Request, res: Response) {
    const { workspaceId, chain } = req.body
    if (chain === undefined) {
        res.status(400).json({ 'Error': 'Missing chain' })
    } else if (typeof chain !== "number") {
        res.status(401).json({ 'Error': 'Invalid chain' })
    } else if (SupportedChainId[chain] === undefined) {
        res.status(402).json({ 'Error': 'Unsupported chain' })
    } else if (workspaceId === undefined) {
        res.status(403).json({ 'Error': 'Missing workspaceId' })
    } else if (typeof workspaceId !== "string") {
        res.status(404).json({ 'Error': 'Invalid workspaceId' })
    } else {
        try {
            const data = await work(OnChainEvent.ApplicationUpdate, chain, { workspaceId })
            res.status(200).json(data)
        } catch (e) {
            res.status(500).json({ 'Error': e })
        }
    }
}

export default applicationUpdate;