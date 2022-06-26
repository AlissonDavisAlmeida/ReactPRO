import { useState } from "react"
import { OnChangeArgs, ProductInCart } from "../interfaces/ProductInterface"

const useShoppingCart = () => {

    const [shoppingCart, setshoppingCart] = useState<{ [key: string]: ProductInCart }>({})

    const onProductCountChanged = ({ product, quantity }: OnChangeArgs) => {
        setshoppingCart(prevState => {
            const productInCart: ProductInCart = prevState[product.id] || { ...product, quantity: 0 }

            if (Math.max(productInCart.quantity + quantity, 0) > 0) {
                productInCart.quantity += quantity
                return { ...prevState, [product.id]: productInCart }
            }

            const { [product.id]: toDelete, ...res } = prevState
            return res
        })

    }

    return { shoppingCart, onProductCountChanged }

}


export {
    
    useShoppingCart
}