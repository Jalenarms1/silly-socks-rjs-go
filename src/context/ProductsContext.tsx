import {useState, useEffect, useContext, createContext}  from "react"
import { Product } from "../types"



const ProductContext = createContext({} as {products: Product[]})

export const ProductContextProvider = ({children}: {children: React.ReactNode}) => {
    const [products, setProducts] = useState<Product[]>([])


    useEffect(() => {
        const getProducts = async () => {
            const resp = await fetch(`http://localhost:8080/api/products/list`)

            const data = await resp.json()

            console.log(data);

            setProducts(data)
            
        }

        getProducts()
    }, [])

    return <ProductContext.Provider value={{products}}>
        {children}
    </ProductContext.Provider>
}

export const useProductsContext = () => {
    return useContext(ProductContext)
}