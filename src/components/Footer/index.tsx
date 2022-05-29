import styles from './styles.module.scss'
import React, { useState } from 'react'
import {Button} from "../Button";
import {ToastShipping} from "../Toast";
import {bool} from "prop-types";
import {useShipping} from "../../hooks/shipping";
import json from '../../services/utils'

export function Footer() {

    const {
        active,
        changeShipping
    } = useShipping()

    return (
        <div className={styles.container}>
            <div className={styles.info}>
                <div className={styles.totals}>
                    <p>Qt. Items: <span>{!active?json.json.items.length:json.jsonBigger.items.length}</span></p>
                </div>

                {
                    !active ?
                        <>
                            {
                                json.json.totalizers.map((total, k) => {
                                    return (
                                        <div key={k} className={styles.totals}>

                                                {total.id === "Discounts" ?
                                                    <p className={styles.discount}>
                                                        {total.name}:
                                                        <span>{(total.value).toLocaleString('pt-br', {
                                                            style: 'currency',
                                                            currency: 'BRL'
                                                        })}</span>

                                                    </p>
                                                    :
                                                    <p>
                                                        {total.name}:
                                                        <span>{(total.value).toLocaleString('pt-br', {
                                                            style: 'currency',
                                                            currency: 'BRL'
                                                        })}</span>
                                                    </p>
                                                }
                                        </div>
                                    )
                                })
                            }
                        </>
                        :
                        <>
                            {
                                json.jsonBigger.totalizers.map((total, k) => {
                                    return (
                                        <div key={k} className={styles.totals}>

                                            {total.id === "Discounts" ?
                                                <p className={styles.discount}>
                                                    {total.name}:
                                                    <span>{(total.value).toLocaleString('pt-br', {
                                                        style: 'currency',
                                                        currency: 'BRL'
                                                    })}</span>

                                                </p>
                                                :
                                                <p>
                                                    {total.name}:
                                                    <span>{(total.value).toLocaleString('pt-br', {
                                                        style: 'currency',
                                                        currency: 'BRL'
                                                    })}</span>
                                                </p>
                                            }
                                        </div>
                                    )
                                })
                            }
                        </>
                }
                <div className={styles.toast}>
                    <ToastShipping active={active}/>
                </div>
            </div>

            <div className={styles.button}>
                <Button
                    placeholder={"Finalizar Compra"}
                    onClick={changeShipping}
                    theme={'primary'}
                />
            </div>

        </div>
    );
}
