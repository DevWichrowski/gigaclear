import React from 'react';

import styles from './DateLabel.module.sass';
import {formatDate} from "../../../utils/funcs";

interface IDateLabelProps {
    date: string;
}

const DateLabel = (props: IDateLabelProps) => {
    const {date} = props;

    return (
        <div className={styles.DateLabel}>
            {formatDate(date)}
        </div>
    );
};

export default DateLabel;
