import React from 'react';

import Post from "../Post/Post";
import List from "@/molecules/List/List";

import {IPost} from "../../../data/mocked-posts";


interface IPostListProps {
    posts: IPost[];
}

const PostList = (props: IPostListProps) => {
    const {posts} = props;

    return (
        <div>
            <List
                data={posts}
                renderItem={(item) => <Post
                    id={item.id}
                    title={item.title}
                    description={item.shortDescription}
                    topic={item.topic}
                    author={item.author}
                    date={item.date}
                    image={item.thumbnailSrc}
                />}
            />
        </div>
    );
};

export default PostList;
