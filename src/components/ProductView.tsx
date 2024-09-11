import { LuLoader } from 'react-icons/lu'
import { useCartContext } from '../context/CartContext'
import { useProductsContext } from '../context/ProductsContext'
import { Product } from '../types'

export const ProductView = () => {
    const {currProduct} = useProductsContext()
    const {addToCart} = useCartContext()

  return (
    <>
        {currProduct ? <div className=" rounded-md flex flex-col w-[85%] mx-auto p-3 gap-5 pb-5 mb-5">
            <img src={currProduct?.image} alt={currProduct?.name} className="h-96 w-[95%] mx-auto shadow-sm shadow-zinc-300 rounded-md" />
            <div className="flex flex-col ">
                <p className="text-3xl font-semibold text-black">
                    {currProduct?.name}
                </p>
                <p className="text-zinc-500 text-lg">{currProduct?.price}</p>
            </div>
            <div className="flex gap-2">
                <button onClick={() => addToCart(currProduct as Product)} className="btn w-1/2 bg-red-600 text-white border-0 shadow-sm shadow-zinc-300">Add to cart</button>
                <button className="btn w-1/2 bg-yellow-300 text-black border-0 shadow-sm shadow-zinc-300">Buy now</button>
            </div>

        </div>
        : <div className='h-96 flex justify-center items-center rounded-md bg-white flex-col w-[85%] mx-auto p-3 gap-5 pb-5 mb-5'>
            <LuLoader  className='animate-spin text-3xl'/>
        </div>
        }
    
    </>
  )
}
