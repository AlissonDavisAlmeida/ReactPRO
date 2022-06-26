import { ProductCardProps } from "../interfaces/ProductInterface";

const product1: ProductCardProps = {
    id: 1,
    title: "Coffee Mug",
    img: "coffee-mug.png"

}

const product2: ProductCardProps = {
    id: 2,
    title: "Coffee Mug - Meme",
    img: "coffee-mug2.png"
}

export const products = [product1, product2];