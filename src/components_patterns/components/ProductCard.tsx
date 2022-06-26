import styles from "../styles/styles.module.css"
import "../styles/custom_styles.css"
import { useProduct } from "../hooks/useProduct";
import { ProductButtons } from "./product/productButton";
import { Provider } from "../context/ProductCardContext";
import { Props } from "../interfaces/ProductInterface";
import { ProductTitle } from "./product/productTitle";
import { ProductImage } from "./product/ProductImage";
import React from "react";


function ProductCard({ product, className, showTitle, onChange, value }: Props) {

    const { counter, increaseBy } = useProduct({ product, onChange, value })

    return (
        <Provider value={{ counter, increaseBy, product }}>

            <div className={`${styles.productCard} ${className || ''}`}>

                <ProductImage className={styles.productImg} />
                {showTitle && <ProductTitle className={styles.productDescription} />}

                <ProductButtons />


            </div>
        </Provider>
    );
}

export default React.memo(ProductCard);