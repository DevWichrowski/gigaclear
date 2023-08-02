import React from 'react';

import {formatDate} from "../../../utils/funcs";
import Button from "@/atoms/Button/Button";

import styles from './Captions.module.sass';

interface ICaptionsProps {
    author: string;
    date: string;
    topic: string;
}

const Captions = (props: ICaptionsProps) => {
    const {author, date, topic} = props;

    return (
        <div className={styles.Captions}>
            <div className={styles.container}>
                <div className={styles.author}>
                    {author}
                </div>

                <div className={styles.dflex}>
                    <div className={styles.timeText}>
                        {topic}
                    </div>
                    <div className={styles.timeText}>
                        {formatDate(date)}
                    </div>
                </div>
            </div>


            <Button link="/">
                Sign up to this event
            </Button>
        </div>
    );
};

export default Captions;
