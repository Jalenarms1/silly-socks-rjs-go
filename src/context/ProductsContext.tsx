import {useState, useEffect, useContext, createContext}  from "react"
import { Product } from "../types"
import { apiRoot, get } from "../utils"



const ProductContext = createContext({} as {products: Product[], currProduct: Product | null, getProduct: (productId: string) => Promise<void>})

export const ProductContextProvider = ({children}: {children: React.ReactNode}) => {
    const [products, setProducts] = useState<Product[]>([])
    const [currProduct, setCurrProduct] = useState<Product | null>(null)


    const getProduct = async (productId: string) => {
        setCurrProduct(null)
        // const resp = await fetch(`${apiRoot}/products/find/${productId}`)
        const data = await get(`/products/find/${productId}`)

        // const data = await resp.json()

        setCurrProduct(data)
    }


    useEffect(() => {
        const getProducts = async () => {
            

            // const resp = await fetch(`${apiRoot}/products/list`, {
            //     credentials: "include"
            // })
            const data = await get(`/products/list`)
            
            // const data = await resp.json()

            console.log(data);

            setProducts(data)
            
        }

        getProducts()
    }, [])

    return <ProductContext.Provider value={{products, currProduct, getProduct}}>
        {children}
    </ProductContext.Provider>
}

export const useProductsContext = () => {
    return useContext(ProductContext)
}