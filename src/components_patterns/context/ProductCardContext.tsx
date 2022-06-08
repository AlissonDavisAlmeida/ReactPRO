import { createContext } from "react"
import { ProductContextInterface } from "../interfaces/ProductInterface"

export const ProductContext = createContext<ProductContextInterface>({})
export const { Provider } = ProductContext