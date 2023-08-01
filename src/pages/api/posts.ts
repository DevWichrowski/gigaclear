import type { NextApiRequest, NextApiResponse } from 'next'
import {mockedPosts} from "../../data/mocked-posts";


export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    res.status(200).json(mockedPosts)
}
