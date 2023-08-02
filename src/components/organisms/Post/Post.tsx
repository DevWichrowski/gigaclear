import React from 'react';

import Image from 'next/image';

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
            {title}
        </div>
    );
};

export default Post;
