import styles from './styles.module.scss'
import React from 'react'
import {ProductProps} from "../../types";
import Image from "next/image";
import {BiTrash} from "react-icons/bi";

interface ProductComponentProps {
    data: ProductProps
}

export function Product({data}: ProductComponentProps) {

    return (
        <li className={styles.container}>
            <div className={styles.image}>
                <Image src={data.imageUrl} height={100} width={100} alt={data.name}/>
            </div>
            <div className={styles.info}>
                <h3>{data.name}</h3>
                <p>{(data.price).toLocaleString('pt-br', {
                    style: 'currency',
                    currency: 'BRL'
                })}</p>
                <span>-{data.priceTags.value}%</span>
                <p className={styles.discount}>Valor com desconto: {((data.price) - (data.priceTags.value / 100)).toLocaleString('pt-br', {
                    style: 'currency',
                    currency: 'BRL'
                })}</p>
                <BiTrash/>
            </div>
        </li>
    );
}
