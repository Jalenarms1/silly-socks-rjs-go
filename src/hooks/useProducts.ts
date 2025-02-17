import { useEffect, useState } from "react";
import { Product } from "../models/Cart";

export type ProductViewType = "All" | "Socks" | "Slippers" | "Charms"


export const useProducts = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [currProductView, setCurrProductView] = useState<ProductViewType>("All")
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

    const getProducts = async () => {
        try {
          const resp = await fetch(import.meta.env.VITE_API_DOMAIN + "/products", {
            method: "GET",
            headers: {
              "Content-Type": "application/json"
            }
          })
    
          if (resp.status == 200) {
            const json = await resp.json()
            
            console.log(json);
            const products = json.reduce((acc, {id, name, category, description, price, quantity, image, sizes }) => {
                const product: Product = {
                  id,
                  name,
                  category,
                  description,
                  price,
                  quantity,
                  image, 
                  sizes
      
                } 
      
                acc.push(product)
      
      
                return acc
              }, [])
            setProducts(products)
            setFilteredProducts(products)
    
          }
    
          
        } catch (error) {
          console.log(error);
          
        }
      }
    
    useEffect(() => {
        getProducts()
    
    }, [])
    
    useEffect(() => {
        if (currProductView == "All")
        setFilteredProducts(products.filter(p => p.category == currProductView))
    }, [currProductView])

    return {products: filteredProducts, currProductView, setCurrProductView}

}