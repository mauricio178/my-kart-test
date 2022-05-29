import React, { HTMLAttributes } from 'react'
import styles from './styles.module.scss'
import {placeholder} from "@babel/types";

type ButtonProps = HTMLAttributes<HTMLButtonElement> & {
    placeholder: string,
    theme?: 'primary' | 'white' | 'red'
    loading?: boolean
}

export function Button({placeholder, ...rest}: ButtonProps) {
    return (
        <button
            className={styles.container}
            {...rest}
        >
            {placeholder}
        </button>
    )
}