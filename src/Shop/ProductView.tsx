import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { CartItem, Product } from '../models/Cart'
import TopBar from '../TopBar'
import { IoIosHeartEmpty, IoMdCart } from 'react-icons/io'
import { useCartContext } from '../context/useCartContext'
import { IoIosArrowBack } from "react-icons/io";
import Backbar from '../Shared/Backbar'
import { getProduct } from '../utils'
import { useFavorites } from '../hooks/useFavorites'
import { IoIosHeart } from "react-icons/io";
import { TbLoaderQuarter } from "react-icons/tb";


const ProductView = () => {
    const {productId} = useParams()
    const [product, setProduct] = useState<Product | null>(null)
    const [existingCartItem, setExistingCartItem] = useState<CartItem | null>(null)
    const {removeFromCart, addToCart, cartItems} = useCartContext()
    const navigate = useNavigate()
    const {userFavorites, toggleFavorite} = useFavorites()
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [productSize, setProductSize] = useState<string>("")


    const getProductById = async (productId: string) => {
        setIsLoading(true)
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

        setIsLoading(false)
    }

    useEffect(() => {
        if (productId) {
            getProductById(productId)
        }
    }, [productId])

    useEffect(() => {    
        window.scrollTo(0,0)
      }, [])

    useEffect(() => {
        if (product) {
            setProductSize(product.sizes.split(",")[0])
        }
    }, [product])

   useEffect(() => {
    setExistingCartItem(cartItems.find(ci => ci.product.id == productId && ci.size == productSize))
   }, [productId, cartItems])

   useEffect(() => {
    setExistingCartItem(cartItems.find(ci => ci.product.id == productId && ci.size == productSize))
   }, [productSize])

  return (
    <div className="min-h-screen relative w-full overflow-x-hidden scrollbar-hide flex flex-col font-mono bg-white">
        <TopBar />
        <Backbar  />
        {product ? <div className="flex-1">
            <div className="flex flex-col w-full items-center gap-5 p-5 bg-zinc-100 h-screen">
                <img src={product.image} alt='product-img' className='object-fill w-80 h-96 rounded-sm shadow-lg shadow-zinc-300' />
                {/* <div className="w-full h-[0.5px] bg-zinc-300"></div> */}

                <div className="flex flex-col gap-2 w-80 mx-auto">
                    <div className="flex justify-between items-center">
                        <p className="text-2xl font-bold text-red-500">{product.price / 100}</p>
                        {!userFavorites.find(f => f.id == product.id) ? <IoIosHeartEmpty onClick={() => toggleFavorite(product)} className='text-3xl text-zinc-400 active:scale-[.95]' /> : <IoIosHeart onClick={() => toggleFavorite(product)} className='text-3xl text-red-500 active:scale-[.95]' />}
                        {/* IoIosHeart */}
                    </div>
                    <div className="flex flex-col gap-5">
                        <p className='text-zinc-700 '>{product.name}</p>

                        <div className="flex flex-col gap-1">
                            <p className="text-sm text-zinc-400">Sizes</p>
                            <div className="flex items-center gap-2">
                                {product.sizes.split(",").map(s => (
                                    <button onClick={() => setProductSize(s)} className={`p-1 px-2  ${productSize == s ? "bg-yellow-500 " : "bg-zinc-200"} rounded-md text-zinc-700`}>{s}</button>

                                ))}
                                
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 mt-5">
                        {!existingCartItem ? <div onClick={() => addToCart(product, productSize)} className='flex items-center justify-center active:scale-[.95] w-full bg-red-500 px-2 py-4  rounded-sm gap-2'>
                            <IoMdCart className='text-white' />
                            <p className='text-sm text-white font-semibold'>Add to cart</p>
                        </div> : (
                            <div className=' items-center justify-center w-full text-white grid grid-cols-3  rounded-sm   gap-2 '>
                                <button onClick={() => removeFromCart(product, productSize, true)} className='bg-red-500 rounded-md text-lg px-2 py-4 '>-</button>
                                <p className='text-base text-black font-bold text-center'>{existingCartItem.quantity}</p>
                                <button onClick={() => addToCart(product, productSize)} className='text-lg px-2 py-4  bg-red-500 rounded-md'>+</button>
                            </div>
                        )}
                        <div onClick={() => navigate("/cart")} className='flex items-center justify-center active:scale-[.95] w-full border border-red-500 px-2 py-4 rounded-sm gap-2 text-red-500'>
                            {/* <IoMdCart className='text-red-500' /> */}
                            <p className='text-sm text-red-500 font-semibold'>Buy now</p>
                        </div>

                    </div>
                </div>
            </div>
        </div> : (
            <p></p>
        )}
        {isLoading && 
        <div className="min-h-screen p-5 w-full">
            <div className='w-80 h-96 bg-white shadow-md flex justify-center items-center'>
                <TbLoaderQuarter className='text-3xl animate-spin' />
            </div>

        </div> }
    </div>
  )
}

export default ProductView
