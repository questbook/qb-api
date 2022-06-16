import { Request, Response } from "express";
import { SupportedChainId } from "../src/configs/chains";
import { OnChainEvent } from "../src/configs/events";
import { work } from "../src/utils/work";

async function daoCreated(req: Request, res: Response) {
    const { chain } = req.body
    if (chain === undefined) {
        res.status(400).json({ 'Error': 'Missing chain' })
    } else if (typeof chain !== "number") {
        res.status(401).json({ 'Error': 'Invalid chain' })
    } else if (SupportedChainId[chain] === undefined) {
        res.status(402).json({ 'Error': 'Unsupported chain' })
    } else {
        try {
            const data = await work(OnChainEvent.DaoCreated, chain)
            res.status(200).json(data)
        } catch (e) {
            res.status(500).json({ 'Error': e })
        }
    }
}

export default daoCreated;