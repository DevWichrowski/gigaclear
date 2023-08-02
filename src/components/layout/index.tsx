import React, {ReactNode} from "react"
import {Main} from "./Main"
import {Header} from "./Header"

import Image from 'next/image';

import styles from './index.module.sass'

export interface ILayoutProps {
    children: ReactNode
}

export const Layout = (props: ILayoutProps) => {
    const {children} = props

    return (
        <div className={styles.Layout}>
            <Header />
            <Image src="/assets/images/vector.png" alt="vector" layout="fill" className={styles.image} quality={50} />
            <Main>
                {children}
            </Main>
        </div>
    )
}
