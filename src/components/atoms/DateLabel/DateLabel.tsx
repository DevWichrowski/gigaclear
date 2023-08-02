import React from 'react';

import {formatDate} from "../../../utils/funcs";

import styles from './DateLabel.module.sass';

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
