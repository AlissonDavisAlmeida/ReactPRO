import styles from "../styles/styles.module.css"
import "../styles/custom_styles.css"
import { useProduct } from "../hooks/useProduct";
import { Provider } from "../context/ProductCardContext";
import { Props } from "../interfaces/ProductInterface";
import React from "react";


function ProductCard(state: Props) {

    const { counter, increaseBy, maxCount, reset, product } = useProduct({
        product: state.product,
        onChange: state.onChange,
        value: state.value,
        initialValue: state.initialValue,
    });

    return (
        <Provider value={{ counter, increaseBy, product: state.product, maxCount }}>

            <div className={`${styles.productCard} ${state.className || ''}`}>
                <>

                    {state.children({
                        productImg: styles.productImg,
                        showTitle: state.showTitle!,
                        productDescription: styles.productDescription,
                        count: counter,
                        isMaxCountReached: !!maxCount && maxCount === counter,
                        product,
                        increaseBy,
                        reset
                    })}

                </>
            </div>
        </Provider>
    );
}

export default React.memo(ProductCard);