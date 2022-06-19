import { useContext } from "react"
import { ProductContext } from "../../context/ProductCardContext"
import noImage from "../../assets/no-image.jpg"
import { ProductChildrenPropsInterface } from "../../interfaces/ProductInterface"


export const ProductImage = (props: ProductChildrenPropsInterface) => {
    
    const { product } = useContext(ProductContext)
    
    return (
        <img className={props.className} src={product!.img ?? noImage} alt="" />
    )

}
