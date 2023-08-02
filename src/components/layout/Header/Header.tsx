import React from 'react';
import {Logo} from "@/atoms/Logo/Logo";

import Link from 'next/link';

import styles from './Header.module.sass'


export const Header: React.FC = () => {
    return (
        <header className={styles.Header}>
            <Link href="/">
                <div className={styles.container}>
                    <Logo type='core' />
                </div>
            </Link>
        </header>
    )
}
