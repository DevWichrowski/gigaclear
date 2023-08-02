import React from 'react';
import styles from './TextHeader.module.sass';

interface ITextHeaderProps {
    text: string;
}

const TextHeader = (props: ITextHeaderProps) => {
    const {text} = props;

    return (
        <h1 className={styles.TextHeader}>
            {text}
        </h1>
    );
};

export default TextHeader;
