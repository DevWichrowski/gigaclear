import React from 'react';

import styles from "./PostDescription.module.sass"

interface IPostDescriptionProps {
    text: string;
}

const PostDescription = (props: IPostDescriptionProps) => {
    const {text} = props;

    return (
        <div className={styles.PostDescription}>
            {text}
        </div>
    );
};

export default PostDescription;
