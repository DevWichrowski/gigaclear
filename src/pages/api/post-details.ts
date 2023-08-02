import type { NextApiRequest, NextApiResponse } from 'next'
import {IPost, mockedPosts} from "../../data/mocked-posts";

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<IPost | undefined>
) {
    const { id } = req.query

    const details = mockedPosts.find(post => post.id === Number(id));

    return res.status(200).json(details)
}
