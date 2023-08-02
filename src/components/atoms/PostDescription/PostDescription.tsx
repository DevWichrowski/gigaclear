import React from 'react';

import styles from "./PostDescription.module.sass"
import {truncateText} from "../../../utils/funcs";

interface IPostDescriptionProps {
    text: string;
    truncateCount?: number;
}

const PostDescription = (props: IPostDescriptionProps) => {
    const {text, truncateCount} = props;

    const description = truncateCount ? truncateText(text, truncateCount) : text;

    return (
        <div className={styles.PostDescription}>
            {description}
        </div>
    );
};

export default PostDescription;
