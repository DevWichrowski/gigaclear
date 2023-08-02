import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import Tag from "@/atoms/Tag/Tag";
import PostDescription from "@/atoms/PostDescription/PostDescription";

import {formatDate} from "../../../utils/funcs";

import styles from './Post.module.sass';

interface IPostProps {
    id: number;
    title: string;
    description: string;
    topic: string;
    author: string;
    date: Date;
    image: string;
}

const Post = (props: IPostProps) => {
    const {id, title, description, topic, author, date, image} = props;

    return (
        <Link href={`/post/${id}`}>
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

                        <div className={styles.desktopDate}>
                            <Tag text={formatDate(date.toString())} />
                        </div>
                    </div>

                    <PostDescription text={description} truncateCount={155} />

                    <div className={styles.mobileDate}>
                        {formatDate(date.toString())}
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Post;
