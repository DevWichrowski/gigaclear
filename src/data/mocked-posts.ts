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

makeArray(5).map((index) => {
    mockedPosts.push({
        ...mockedPost,
        id: ++index,
        date: new Date(2023, 8, +index),
    });
});
