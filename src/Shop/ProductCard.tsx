import React from 'react'
import { CartItem, Product } from '../models/Cart'
import { IoIosHeartEmpty, IoMdCart } from 'react-icons/io'

interface ProductCardProps {
    product:  Product,
    addToCart: () => void,
    removeFromCart: () => void,
    existingCartItem?: CartItem,
    onNavigate: () => void
}

const ProductCard = ({product, addToCart, removeFromCart, existingCartItem, onNavigate}: ProductCardProps) => {

  const handleAction = (e: React.MouseEvent, fn: () => void) => {
    e.stopPropagation()

    fn()
  }

  return (
    <div onClick={onNavigate} className="min-w-full rounded-sm border flex flex-col gap-1 border-zinc-300 max-h-[415px] min-h-[415px] bg-zinc-900 text-red-500">
        <img src={product.image} alt='image product' className='object-fill min-h-56 max-h-56 w-full' />
        <div className="flex flex-col p-2 flex-1 gap-2">
            <div className='flex justify-between items-center '>
                <p className='text-yellow-400 font-bold text-lg'>${product.price}</p>
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

        </div>
    </div>
  )
}

export default ProductCard
