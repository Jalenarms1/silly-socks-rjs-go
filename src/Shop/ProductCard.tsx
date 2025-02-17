import React from 'react'
import { CartItem, Product } from '../models/Cart'
import { IoIosHeartEmpty, IoMdCart } from 'react-icons/io'
import { FaCirclePlus } from "react-icons/fa6";


interface ProductCardProps {
    product:  Product,
    addToCart: () => void,
    existingCartItem?: CartItem,
    onNavigate: () => void,
}

const ProductCard = ({product, addToCart, existingCartItem, onNavigate}: ProductCardProps) => {

  const handleAction = (e: React.MouseEvent, fn: () => void) => {
    e.stopPropagation()

    fn()
  }

  return (
    <div onClick={onNavigate} className="max-w-full flex flex-col gap-1 border-zinc-300 text-red-500 bg-white shadow-sm rounded-md min-w-48">
        <img src={product.image} alt='image product' className='object-fill  rounded-md min-h-60 max-h-60 w-full ' />
        <div className="flex items-center justify-between gap-10 bg-zinc-100 p-1 shadow-sm rounded-md">
            <div className="flex flex-col">
                <p className='font-semibold'>{product.price / 100}</p>
                {/* <p className='text-sm text-zinc-500 font-sans'>{product.name}</p> */}
            </div>
            <div onClick={(e) => handleAction(e, addToCart)} className="w-fit relative flex">
                <FaCirclePlus className='text-yellow-500 text-4xl' />
               {existingCartItem && <div  className="absolute right-5 w-4 h-4 top-[-5px] bg-red-600 rounded-full border border-zinc-300 flex justify-center items-center text-white "><p className='text-xs'>{existingCartItem.quantity}</p></div>}
            </div>
        </div>
        {/* <div className="flex flex-col p-2 flex-1 gap-2">
            <div className='flex justify-between items-center '>
                <p className='text-yellow-400 font-bold text-lg'>${(product.price / 100)}</p>
                <IoIosHeartEmpty className='text-3xl text-zinc-400 active:scale-[.95]' />
            </div>
            <div className="flex flex-col justify-between flex-1">
                <p className='text-zinc-300'>{product.name}</p>
                {!existingCartItem ? <div onClick={(e) => handleAction(e, addToCart)} className='flex items-center justify-center active:scale-[.95] w-full bg-red-500  p-1 py-2 rounded-sm gap-2'>
                    <IoMdCart className='text-white' />
                    <p className='text-xs text-white font-semibold'>Add to cart</p>
                </div> : (
                    <div className='grid grid-cols-3 items-center w-full bg-red-500 text-white font-semibold p-1  rounded-sm  gap-2'>
                        <button onClick={(e) => handleAction(e, removeFromCart)} className='px-3'>-</button>
                        <p className='text-sm text-center'>{existingCartItem.quantity}</p>
                        <button onClick={(e) => handleAction(e, addToCart)} className='px-3'>+</button>
                    </div>
                )}
            </div> 

        </div> */}
    </div>
  )
}

export default ProductCard
