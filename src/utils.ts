import { Product } from "./models/Cart";

export const getProduct = async (productId: string) => {
    try {
        const resp = await fetch(import.meta.env.VITE_API_DOMAIN + "/products/" + productId, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })

        if (resp.status == 200) {
            const product: Product = await resp.json()

           return product

        }
    } catch (error) {
        console.log(error);
        
    }
}