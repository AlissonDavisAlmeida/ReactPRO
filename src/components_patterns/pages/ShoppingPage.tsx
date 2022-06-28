import { ProductButtons } from "../components/product/productButton";
import { ProductImage } from "../components/product/ProductImage";
import { ProductTitle } from "../components/product/productTitle";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";
import { ProductCardHandlers } from "../interfaces/ProductInterface";
import "../styles/custom_styles.css"


const product = products[0]

function ShoppingPage() {




    return (
        <div className="">
            <h1>Shopping Page</h1>

            <ProductCard
                key={product.id}
                product={product}
                showTitle
                initialValue={{
                    quantity: 1,
                    maxCount: 10
                }}
            >
                {(state: ProductCardHandlers) => (
                    <>
                        <ProductImage className={state.productImg} />
                        {state.showTitle && <ProductTitle className={state.productDescription} />}

                        <ProductButtons />

                        <button onClick={state.reset}>reset</button>
                        <button onClick={() =>state.increaseBy?.(-2)}>-2</button>
                        {!state.isMaxCountReached &&

                            <button onClick={()=>state.increaseBy?.(2)}>+2</button>
                        }
                    </>
                )}

            </ProductCard>


        </div>
    );
}

export default ShoppingPage;