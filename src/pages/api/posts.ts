import type { NextApiRequest, NextApiResponse } from 'next'
import {IPost, mockedPosts} from "../../data/mocked-posts";


export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<IPost[]>
) {
    return res.status(200).json(mockedPosts)
}
