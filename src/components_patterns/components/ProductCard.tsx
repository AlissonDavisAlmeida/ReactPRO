import styles from "../styles/styles.module.css"
import noImage from "../assets/no-image.jpg"
import { useProduct } from "../hooks/useProduct";

interface ProductCardProps {
    id: number
    title: string
    img?: string
}

interface Props {
    product: ProductCardProps
}

const ProductImage = ({ img = "" }) => {
    return (
        <img className={styles.productImg} src={img ?? noImage} alt="" />
    )

}

const ProductTitle = ({ title = "" }) => {
    return (
        <span className={styles.productDescription}>{title}</span>

    )
}


const ProductButtons = ({counter, increaseBy    }:{counter:number, increaseBy: Function})=>{
    
    return (
        <div className={styles.buttonsContainer}>
                <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>-</button>

                <div className={styles.countLabel}>
                    {counter}
                </div>
                <button className={styles.buttonAdd} onClick={() => increaseBy(1)}>+</button>
            </div>
    )
}


function ProductCard({ product }: Props) {

    const { counter, increaseBy } = useProduct()

    return (

        <div className={styles.productCard}>

            <ProductImage img={product.img} />

            <ProductTitle title={product.title} />
            
            <ProductButtons counter={counter} increaseBy={increaseBy} />
                
              
        </div>
    );
}

export default ProductCard;