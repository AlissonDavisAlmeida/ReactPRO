export interface ProductCardProps {
    id: number
    title: string
    img?: string
}

export interface Props {
    product: ProductCardProps
}

export interface ProductContextInterface {
    product?: ProductCardProps
    counter?: number
    increaseBy? : (value : number) => void
}
