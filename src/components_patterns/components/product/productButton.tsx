import { useCallback, useContext } from "react"
import { ProductContext } from "../../context/ProductCardContext"
import styles from "../../styles/styles.module.css"

interface Props {
    maxCount: number
}

export const ProductButtons = () => {

    const { counter, increaseBy, maxCount } = useContext(ProductContext)

    const isMaxReached = useCallback(() => {
        return !!maxCount && counter === maxCount
    }, [counter, maxCount])

    return (
        <div className={styles.buttonsContainer}>
            <button className={styles.buttonMinus} onClick={() => increaseBy!(-1)}>-</button>

            <div className={styles.countLabel}>
                {counter}
            </div>
            <button disabled={isMaxReached()} className={`${isMaxReached() && styles.disabled} ${styles.buttonAdd}`}
                onClick={() => increaseBy!(1)}
            >
                +
            </button>
        </div>
    )
}