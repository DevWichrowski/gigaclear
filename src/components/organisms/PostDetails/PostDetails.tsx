import React from 'react';

import TextHeader from "@/atoms/TextHeader/TextHeader";
import PostDescription from "@/atoms/PostDescription/PostDescription";
import DateLabel from "@/atoms/DateLabel/DateLabel";

import Image from 'next/image';

import {IPost} from "../../../data/mocked-posts";



import styles from './PostDetails.module.sass';
import HtmlDescription from "@/atoms/HtmlDescription/HtmlDescription";

interface IPostDetailsProps {
    post: IPost;
}

const PostDetails = (props: IPostDetailsProps) => {
    const {post} = props;

    const {id, title, topic, author, date, shortDescription, fullDescription, imageSrc} = post;

    return (
        <div className={styles.PostDetails}>
            <div className={styles.header}>
                <TextHeader text={title} textCenter variant="secondary" />
            </div>

            <div className={styles.shortDescription}>
                <PostDescription text={shortDescription} />
            </div>

            <DateLabel date={date.toString()} />

            <div className={styles.image}>
                <Image src={imageSrc} alt={title} fill />
            </div>

            <div className={styles.content}>
                <HtmlDescription html={fullDescription} />
            </div>
        </div>
    );
};

export default PostDetails;
