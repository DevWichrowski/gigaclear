import React from 'react';

import styles from './HtmlDescription.module.sass';

import {Parser} from 'html-to-react'
interface IHtmlDescriptionProps {
    html: string;
}


const HtmlDescription = (props: IHtmlDescriptionProps) => {
    const { html } = props;

    return (
        <div className={styles.HtmlDescription}>
            {Parser().parse(html)}
        </div>
    );
};

export default HtmlDescription;
