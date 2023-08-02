import React, {ReactNode} from 'react';
import styles from './Main.module.sass'

export interface IMainContentProps {
    children: ReactNode
}

export const Main = (props: IMainContentProps) => {
    const {children} = props

    return <main className={styles.Main}>{children}</main>
}
