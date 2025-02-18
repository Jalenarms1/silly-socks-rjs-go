import { ProductViewType } from "../hooks/useProducts"

export type CartItem = {
    id: string,
    productId: string,
    product: Product,
    quantity: number,
    subTotal: number,
    size: string

}

export type Product = {
    id: string,
    name: string,
    price: number,
    quantity: number,
    image: string,
    category: ProductViewType,
    description: string,
    sizes: string
}

