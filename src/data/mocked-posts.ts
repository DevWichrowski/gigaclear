import {makeArray} from "../utils/funcs";
import {mockedPost} from "./mocked-post";

export interface IPost {
    id: number;
    title: string;
    topic: string;
    author: string;
    date: Date;
    shortDescription: string;
    fullDescription: string;
    thumbnailSrc: string,
    imageSrc: string,
}


export const mockedPosts: IPost[] = [];

makeArray(8).map((index) => {
    const number = index + 1;

    mockedPosts.push({
        ...mockedPost,
        id: number,
        title: `Case Study ${number}`,
        date: new Date(2023, 8, number),
    });
});
