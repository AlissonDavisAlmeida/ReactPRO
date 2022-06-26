import ProductCard from "../components/ProductCard";
import { products } from "../data/products";
import { useShoppingCart } from "../hooks/useShoppingCart";
import "../styles/custom_styles.css"




function ShoppingPage() {


    const { shoppingCart, onProductCountChanged } = useShoppingCart()
  

    return (
        <div className="">
            <h1>Shopping Page</h1>

            <div style={{
                width: "80%",
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",

            }}>

                {products.map(product => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        onChange={onProductCountChanged}
                        showTitle
                        value={shoppingCart[product.id]?.quantity}
                    />
                ))}


            </div>

            <div className="shopping-cart">

                {Object.values(shoppingCart).map(productCart => (

                    <ProductCard key={productCart.id}
                        product={productCart}
                        className="productCart"
                        showTitle={false}
                        onChange={onProductCountChanged}
                        value={productCart.quantity}
                    />
                )
                )
                }

            </div>
        </div>
    );
}

export default ShoppingPage;