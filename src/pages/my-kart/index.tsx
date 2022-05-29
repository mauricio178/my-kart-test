import React, {useState} from 'react'
import {Container} from '../../components/Container'
import styles from './styles.module.scss'
import {Header} from "../../components/Header";
import json from '../../services/utils'
import {Product} from "../../components/Product";
import {Footer} from "../../components/Footer";
import {useShipping} from "../../hooks/shipping";

export default function MyKart() {

    const {
        active
    } = useShipping()

    return (
        <div className={styles.container}>
            <Container theme={"white"}>

                <div className={styles.header}>
                    <Header title={"Meu carrinho"}/>
                </div>

                <div className={styles.list}>
                    <ul> {!active ? <>
                            {json.json.items.map((product) => {
                                return (
                                    <Product
                                        key={product.id}
                                        data={product}
                                    />
                                )
                            })
                            }
                        </> :
                        <>{
                            json.jsonBigger.items.map((product) => {
                                return (
                                    <Product
                                        key={product.id}
                                        data={product}
                                    />
                                )
                            })
                        }
                        </>
                    }


                    </ul>
                </div>

                <div className={styles.footer}>
                    <Footer/>
                </div>

            </Container>

        </div>
    )
}
