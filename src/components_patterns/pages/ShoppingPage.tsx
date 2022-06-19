import { useCallback, useState } from "react";
import ProductCard from "../components/ProductCard";
import { ProductCardProps } from "../interfaces/ProductInterface";
import "../styles/custom_styles.css"

const product: ProductCardProps = {
    id: 1,
    title: "Coffee Mug",
    img: "coffee-mug.png"

}

const product2: ProductCardProps = {
    id: 2,
    title: "Coffee Mug - Meme",
    img: "coffee-mug2.png"
}



interface ProductInCart extends ProductCardProps {
    quantity: number
}



function ShoppingPage() {



    const [shoppingCart, setshoppingCart] = useState<{ [key: string]: ProductInCart }>({
        "1": { ...product, quantity: 10 },
        "2": { ...product2, quantity: 14 }
    })

    const onProductCountChanged = useCallback(()=>{
        console.log("Ok, thats right now")
    },[])

    return (
        <div className="">
            <h1>Shopping Page</h1>

            <div style={{
                width: "80%",
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",

            }}>

                <ProductCard product={product} onChange={onProductCountChanged} showTitle />
                <ProductCard product={product2} onChange={onProductCountChanged}  showTitle />

            </div>

            <div className="shopping-cart">
                <ProductCard product={product2} className="productCart" showTitle={false}  />
                <ProductCard product={product} className="productCart" showTitle={false} />
            </div>
        </div>
    );
}

export default ShoppingPage;