import type { NextApiRequest, NextApiResponse } from 'next'
import {mockedPosts} from "../../data/mocked-posts";

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<any | undefined>
) {
    const { id } = req.query

    const details = mockedPosts.find(el => el.id === Number(id));

    return res.status(200).json(details)
}
