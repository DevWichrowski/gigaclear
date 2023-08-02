import '../styles/globals.sass'
import type {AppProps} from 'next/app'

import {Inter, Advent_Pro} from 'next/font/google'

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
})

const advent_pro = Advent_Pro({
    subsets: ['latin'],
    variable: '--font-advent-pro',
    display: 'swap',
})


export default function App(props: AppProps) {
    const {Component, pageProps} = props

    return <main className={`${inter.variable} ${advent_pro.variable}`}>
        <Component {...pageProps} />
    </main>
}
