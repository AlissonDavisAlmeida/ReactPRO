import styles from "../styles/styles.module.css"
import { useProduct } from "../hooks/useProduct";
import { ProductButtons } from "./product/productButton";
import { Provider } from "../context/ProductCardContext";
import { Props } from "../interfaces/ProductInterface";
import { ProductTitle } from "./product/productTitle";
import { ProductImage } from "./product/ProductImage";


function ProductCard({ product }: Props) {

    const { counter, increaseBy } = useProduct()

    return (
        <Provider value={{ counter, increaseBy, product }}>

        <div className={styles.productCard}>

            <ProductImage />

            <ProductTitle/>

            <ProductButtons/>


        </div>
        </Provider>
    );
}

export default ProductCard;