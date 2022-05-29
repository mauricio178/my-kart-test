import styles from './styles.module.scss'
import React from 'react'

interface HeaderProps {
    title: string
}
export function Header({title} : HeaderProps) {
    return (
        <div className={styles.container}>
            <h1>{title}</h1>
        </div>
    )
}
