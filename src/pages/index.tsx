import { Head } from 'next/document'
import React from 'react'
import styles from './home.module.scss'

export default function Home() {
    return (
        <>
            <Head>
                <title>Meu Carrinho</title>
            </Head>
            <div className={styles.container}>

            </div>
        </>
    )
}