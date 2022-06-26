export interface ProductCardProps {
    id: number
    title: string
    img?: string
}

export interface Props {
    product: ProductCardProps
    className?: string
    showTitle?: boolean
    value?: number
    onChange?: (args: OnChangeArgs) => void
}

export interface OnChangeArgs{
    product: ProductCardProps
    quantity: number
}

export interface ProductContextInterface {
    product?: ProductCardProps
    counter?: number
    increaseBy?: (value: number) => void
}

export interface ProductChildrenPropsInterface {
    className?: string
}


export interface ProductInCart extends ProductCardProps {
    quantity: number
}

