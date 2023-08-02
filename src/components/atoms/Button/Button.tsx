import React from 'react';

import Link from 'next/link';

import styles from './Button.module.sass';

interface IButtonProps {
    children: string;
    link: string;
}

const Button = (props: IButtonProps) => {
    const {children, link} = props;

    return (
        <Link href={link}>
            <button className={styles.Button}>
                {children}
            </button>
        </Link>
    );
};

export default Button;
