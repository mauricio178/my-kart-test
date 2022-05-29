import {JsonProps} from "../types";

const json = {
    value: 657,
    items: [
        {
            "id": "16701615",
            "name": "Trufa BENDITO CACAU 55% CACAU 30 G",
            "price": 3.23,
            "quantity": 1,
            "imageUrl": "http://codeby.vteximg.com.br/arquivos/ids/159959-800-1029/truffon-meio-amargo.png?v=636930938547630000",
            "priceTags": {
                "value": 30,
            }

        },
        {
            "id": "16701612",
            "name": "TRUFA MORANGO",
            "price": 1.25,
            "quantity": 1,
            "imageUrl": "http://codeby.vteximg.com.br/arquivos/ids/159939-800-1029/trufa-morango-30g.png?v=636916431597070000",
            "priceTags": {
                "value": 12,
            }
        },
        {
            "id": "16701610",
            "name": "TRUFA TRADICIONAL 30 G",
            "price": 3.50,
            "quantity": 1,
            "imageUrl": "http://codeby.vteximg.com.br/arquivos/ids/159942-800-1029/trufa-tradicional.png?v=636916452526400000",
            "priceTags": {
                "value": 30,
            }
        }
    ],
    totalizers: [
        { "id": "Items", "name": "Total dos Itens",  "value": 7.29 },
        { "id": "Discounts", "name": "Total dos Descontos", "value": -0.72 }
    ],
} as JsonProps

const jsonBigger = {
    value: 1401,
    items: [
        {
            "id": "16701615",
            "name": "Trufa BENDITO CACAU 55% CACAU 30 G",
            "price": 3.49,
            "quantity": 1,
            "imageUrl": "http://codeby.vteximg.com.br/arquivos/ids/159959-800-1029/truffon-meio-amargo.png?v=636930938547630000",
            "priceTags":  { "value": 30}
        },
        {
            "id": "16701612",
            "name": "TRUFA MORANGO",
            "price": 1.23,
            "quantity": 1,
            "imageUrl": "http://codeby.vteximg.com.br/arquivos/ids/159939-800-1029/trufa-morango-30g.png?v=636916431597070000",
            "priceTags": { "value": 12}
        },
        {
            "id": "16701610",
            "name": "TRUFA TRADICIONAL 30 G",
            "price": 3.03,
            "quantity": 1,
            "imageUrl": "http://codeby.vteximg.com.br/arquivos/ids/159942-800-1029/trufa-tradicional.png?v=636916452526400000",
            "priceTags": { "value": 30}
        },
        {
            "id": "16701618",
            "name": "TRUFA DE COCO 30 G",
            "price": 3.43,
            "quantity": 1,
            "imageUrl": "http://codeby.vteximg.com.br/arquivos/ids/159957-800-1029/trufa-coco.png?v=636929369885800000",
            "priceTags": { "value": 30}
        },
        {
            "id": "16701609",
            "name": "TRUFA BRANCO 30G",
            "price": 1.20,
            "quantity": 1,
            "imageUrl": "http://codeby.vteximg.com.br/arquivos/ids/159993-800-1029/trufa-branco.png?v=636945743710500000",
            "priceTags": { "value": 11 }
        },
        {
            "id": "16701611",
            "name": "TRUFA MEZZO 30 G",
            "price": 3.03,
            "quantity": 1,
            "imageUrl": "http://codeby.vteximg.com.br/arquivos/ids/159941-800-1029/mezzo.png?v=636916443729870000",
            "priceTags": { "value": 30 }
        },
        {
            "id": "16701608",
            "name": "TRUFA MORANGO E MARACUJÁ 13,5 G",
            "price": 110,
            "quantity": 1,
            "imageUrl": "http://codeby.vteximg.com.br/arquivos/ids/159936-800-1029/Trufa-Morango-e-Maracuja.png?v=636915614811230000",
            "priceTags": { "value": 11}
        }
    ],
    totalizers: [
        { "id": "Items", "name": "Total dos Itens", "value": 15.55 },
        { "id": "Discounts", "name": "Total dos Descontos", "value": -1.54 }
    ],
} as JsonProps

export default {json, jsonBigger}