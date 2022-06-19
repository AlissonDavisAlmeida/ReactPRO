import { useContext } from "react"
import { ProductContext } from "../../context/ProductCardContext"
import { ProductChildrenPropsInterface } from "../../interfaces/ProductInterface"


export const ProductTitle = (props : ProductChildrenPropsInterface) => {

    const { product } = useContext(ProductContext)

    return (
        <span className={props.className}>{product!.title}</span>

    )
}
