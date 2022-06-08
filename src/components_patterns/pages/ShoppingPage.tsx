import ProductCard from "../components/ProductCard";

const product = {
    id: 1,
    title: "Coffee Mug",
    img: "coffee-mug.png"

}


function ShoppingPage() {
    return ( 
        <div className="mainPage">
            <h1>Shopping Page</h1>

            <div style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                
            }}>

            <ProductCard product={product}/>
            <ProductCard product={product}/>
            <ProductCard product={product}/>
            
            </div>
        </div>
     );
}

export default ShoppingPage;