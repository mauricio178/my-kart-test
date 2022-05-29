import React, { ReactElement } from 'react'
import styles from './styles.module.scss'
import {Header} from "../Header";
import {JSXElement} from "@babel/types";

interface ContainerProps {
    theme: 'white' | 'dark'
    children: ReactElement[]
}

export function Container({children, theme}: ContainerProps) {
    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}