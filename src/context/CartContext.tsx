import React, {useContext, createContext} from "react"
import useLocalStorage from "../hooks/useLocalStorage"
import { Product } from "../types"
import { post } from "../utils"

type OrderItem = {
    product: Product,
    total: number,
    quantity: number

}

type Cart = OrderItem[]

type TCartContext = {
    cart: Cart,
    addToCart: (product: Product) => void,
    getCartTotal: () => string,
    itemsInCart: () => number,
    saved: Product[],
    addToSaved: (product: Product) => void,
    updItemQu: (orderItem: OrderItem, type: "inc" | "dec") => void,
    submitCheckout: () => void,
    clearCart: () => void
}

const CartContext = createContext({} as TCartContext)

export const CartContextProvider = ({children}: {children: React.ReactNode}) => {
    const [cart, setCart] = useLocalStorage<Cart>("sillysocks-cart", [])
    const [saved, setSaved] = useLocalStorage<Product[]>("silly-socks-saved-items", [])

    const addToCart = (product: Product) => {
        const existingItem = cart.find(c => c.product.id == product.id)
        if (existingItem) {
            existingItem.quantity ++

            existingItem.total = existingItem.quantity * existingItem.product.price

            setCart([...cart.filter(c => c.product.id != existingItem.product.id), existingItem])
        } else {
            setCart([...cart, {product, quantity: 1, total: product.price}])
        }
    }

    const addToSaved = (product: Product) => {
        const existingItem = saved.find(c => c.id == product.id)
        if (existingItem) {
            setSaved([...saved.filter(c => c.id != existingItem.id)])
        } else {
            setSaved([...saved, product])
        }
    }

    const getCartTotal = () => {
        return cart.reduce((acc, obj) => {
            acc += obj.total
            return acc
        }, 0).toFixed(2)
    }

    const itemsInCart = () => {
        return cart.reduce((acc, obj) => {
            acc += obj.quantity
            return acc
        }, 0)
    }

    const clearCart = () => {
        setCart([])
    }

    const updItemQu = (item: OrderItem, type: "inc" | "dec") => {
        if (type == "inc"){
            setCart(cart.map(c => {
                if (c.product.id == item.product.id) {
                    c.quantity++
                    c.total += c.product.price
                } 

                return c
            }))
        } else {
            if (item.quantity == 1) {
                setCart(cart.filter(c => c.product.id != item.product.id))
            } else {
                setCart(cart.map(c => {
                    if (c.product.id == item.product.id) {
                        c.quantity--
                        c.total -= c.product.price
                    } 

                    return c
                }))

            }
        }
    }

    const submitCheckout = async () => {


        const reqBody = cart.map(c => {
            return {
                product: c.product,
                total: parseFloat(c.total.toFixed(2)),
                quantity: c.quantity
            }
        })

        const data = await post(`/stripe/checkout`, reqBody)

        // const resp = await fetch(`${apiRoot}/stripe/checkout`,
        //     {
        //         method: "POST",
        //         headers: {
        //             "Content-Type": "application/json",

        //         },
        //         body: JSON.stringify(reqBody),
        //         credentials: "include"
        //     }
        // )

        // const data = await resp.json()

        if (data.checkoutUrl) {
            window.location.href = data.checkoutUrl
        }
        
    }

    return <CartContext.Provider value={{cart, addToCart, getCartTotal, itemsInCart, saved, addToSaved, updItemQu, submitCheckout, clearCart}}>
        {children}
    </CartContext.Provider>
}

export const useCartContext = () => {
    return useContext(CartContext)
}