import React from 'react';
import styles from './Header.module.sass'
import {Logo} from "@/atoms/Logo/Logo";

export const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Logo type='core' />
            </div>
        </header>
    )
}
