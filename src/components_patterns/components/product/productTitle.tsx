import { useContext } from "react"
import { ProductContext } from "../../context/ProductCardContext"
import styles from "../../styles/styles.module.css"


export const ProductTitle = () => {

    const { product } = useContext(ProductContext)

    return (
        <span className={styles.productDescription}>{product!.title}</span>

    )
}
