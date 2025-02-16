import React, { useEffect, useState } from 'react'
import { CartItem, Product } from '../models/Cart'
import { getProduct } from '../utils'

const OrderCartItem = ({ci}: {ci: CartItem}) => {
    const [product, setProduct] = useState<Product | null>(null)

    const getProductById = async (productId: string) => {
        // try {
        //     const resp = await fetch(import.meta.env.VITE_API_DOMAIN + "/products/" + productId, {
        //         method: "GET",
        //         headers: {
        //             "Content-Type": "application/json"
        //         }
        //     })

        //     if (resp.status == 200) {
        //         const product: Product = await resp.json()
    
        //         setProduct(product)

        //     }
        // } catch (error) {
        //     console.log(error);
            
        // }
        let p = await getProduct(productId)
        setProduct(p)
    }

    useEffect(() => {
        getProductById(ci.productId)
    }, [])
  return (
    <div key={ci.id} className='rounded-md border border-zinc-200 flex items-start gap-2'>
        <img src={product.image} alt='cart item' className='w-20 h-20 object-fill p-2 bg-yellow-300 shadow-md'/>
        <div className="flex flex-col gap-2">
            <p className='text-base font-semibold text-red-500'>{product.name}</p>
            <p className='text-zinc-400 text-xs'>Quanitity: <span className='text-black'>{ci.quantity}</span></p>
            <p className='text-zinc-400 text-xs'>Price: <span className='text-black'>{product.price}</span></p>

        </div>
    
    </div>
  )
}

export default OrderCartItem
