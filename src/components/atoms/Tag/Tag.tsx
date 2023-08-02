import React from 'react';

import styles from './Tag.module.sass';

interface ITagProps {
    text: string;
}

const Tag = (props: ITagProps) => {
    const {text} = props;

    return (
        <div className={styles.Tag}>
            {text}
        </div>
    );
};

export default Tag;
