export type ProductProps = {
    id: string
    imageUrl: string
    name: string
    price: number
    priceTags: PriceTagProps
    quantity: number
}

type PriceTagProps = {
    value: number
}

export type JsonProps = {
    items: ProductProps[]
    totalizers: TotalizersProps[]
    value: number
}

export type TotalizersProps = {
    id: string
    name: string
    value: number
}