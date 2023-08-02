import React, {CSSProperties} from 'react';
import {classNames} from "../../../utils/funcs";

import styles from './TextHeader.module.sass';


interface ITextHeaderProps {
    text: string;
    textCenter?: boolean;
    variant?: 'primary' | 'secondary';
}

const TextHeader = (props: ITextHeaderProps) => {
    const {text, textCenter = false, variant = 'primary'} = props;

    return (
        <h1 className={classNames({
            [styles.TextHeaderPrimary]: variant === 'primary',
            [styles.TextHeaderSecondary]: variant === 'secondary',
            [styles.textCenter]: textCenter,
        })}>
            {text}
        </h1>
    );
};

export default TextHeader;
