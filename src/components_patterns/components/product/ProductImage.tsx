import { useContext } from "react"
import { ProductContext } from "../../context/ProductCardContext"
import noImage from "../../assets/no-image.jpg"
import styles from "../../styles/styles.module.css"

export const ProductImage = () => {
    
    const { product } = useContext(ProductContext)
    
    return (
        <img className={styles.productImg} src={product!.img ?? noImage} alt="" />
    )

}
