import styles from './styles.module.scss'
import React from 'react'
import {ProductProps} from "../../types";
import Image from "next/image";
import {BiTrash} from "react-icons/bi";

interface ToastShippingProps {
    active: boolean
}

export function ToastShipping({active}: ToastShippingProps) {

    return (
        <div className={styles.container}>
            {active ?
                <p>Parabéns, sua compra tem frete grátis!</p>
                :
                <></>
            }
        </div>
    );
}
