import React from 'react';

import Image from 'next/image';

import Tag from "@/atoms/Tag/Tag";
import {formatDate} from "../../../utils/funcs";

import PostDescription from "@/atoms/PostDescription/PostDescription";

import styles from './Post.module.sass';

interface IPostProps {
    title: string;
    description: string;
    topic: string;
    author: string;
    date: Date;
    image: string;
}

const Post = (props: IPostProps) => {
    const {title, description, topic, author, date, image} = props;

    return (
        <div className={styles.Post}>
            <Image
                src={image}
                alt={title}
                className={styles.thumbnail}
                width={344}
                height={241}
            />
            <div className={styles.content}>
                <h2 className={styles.title}>
                    {title}
                </h2>
                <div className={styles.tags}>
                    <div className={styles.start}>
                        <Tag text={topic} />
                        <Tag text={author} />
                    </div>

                    <Tag text={formatDate(date.toString())} />
                </div>

                <PostDescription text={description} truncateCount={155}/>
            </div>
        </div>
    );
};

export default Post;
