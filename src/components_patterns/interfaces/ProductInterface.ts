export interface ProductCardProps {
    id: number
    title: string
    img?: string
}

export interface Props {
    product: ProductCardProps
    className?: string
    showTitle?: boolean
    onChange?: () => void
}

export interface ProductContextInterface {
    product?: ProductCardProps
    counter?: number
    increaseBy? : (value : number) => void
}

export interface ProductChildrenPropsInterface{
    className?: string
}