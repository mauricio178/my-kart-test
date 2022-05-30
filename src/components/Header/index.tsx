import styles from './styles.module.scss'
import React, {ReactSVGElement} from 'react'

interface HeaderProps {
    title: string,
    icon?: ReactSVGElement
}
export function Header({title, icon} : HeaderProps) {
    return (
        <div className={styles.container}>
            <h1>{icon} {title}</h1>
        </div>
    )
}
