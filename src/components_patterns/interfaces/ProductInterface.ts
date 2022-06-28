
export interface ProductCardProps {
    id: number
    title: string
    img?: string
}

export interface initialValues{
    quantity: number
    maxCount: number
}

export interface Props {
    initialValue?: initialValues
    product: ProductCardProps
    className?: string
    children: (handlers: ProductCardHandlers) => JSX.Element
    showTitle?: boolean
    value?: number
    onChange?: (args: OnChangeArgs) => void
}

export interface OnChangeArgs{
    product: ProductCardProps
    quantity: number
}

export interface ProductContextInterface {
    maxCount?: number
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

export interface ProductCardHandlers{
    count?: number
    productImg: string 
    showTitle: boolean 
    productDescription: string
    isMaxCountReached?: boolean
    maxCount?: number
    product: ProductCardProps

    increaseBy?: (value: number) => void
    reset: ()=> void

}

