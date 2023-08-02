import React, {ReactNode} from "react"
import {Main} from "./Main"
import {Header} from "./Header"

export interface ILayoutProps {
    children: ReactNode
}

export const Layout = (props: ILayoutProps) => {
    const {children} = props

    return (
        <>
            <Header />
            <Main>
                {children}
            </Main>
        </>
    )
}
