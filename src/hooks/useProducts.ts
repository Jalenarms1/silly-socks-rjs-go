import { useEffect, useState } from "react";
import { Product } from "../models/Cart";

export type ProductViewType = "All" | "Socks" | "Slippers" | "Charms"


export const useProducts = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [currProductView, setCurrProductView] = useState<ProductViewType>("All")
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>("")
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const getProducts = async () => {
        setIsLoading(true)
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
        setIsLoading(false)

      }
    
    useEffect(() => {
        getProducts()
    
    }, [])

    const filterView = (view: ProductViewType, products: Product[]) => {
        if (view == "All") { return products }
        const productArr = products.filter(p => p.category == view)

        return productArr
    }

    const filterSearch = (search: string, products: Product[]) => {
        if (search.trim() == "") { return products }
        const productsArr = products.filter(p => p.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()))

        return productsArr
    }
    
    useEffect(() => {
        if (currProductView == "All" && searchTerm.trim() == "") {
            setFilteredProducts(products)
        } else {
            let newProducts = filterView(currProductView, products)
            newProducts = filterSearch(searchTerm, newProducts)
            setFilteredProducts(newProducts)

        }
    }, [currProductView, searchTerm])


    return {products: filteredProducts, currProductView, setCurrProductView, isLoading, setSearchTerm, searchTerm}

}