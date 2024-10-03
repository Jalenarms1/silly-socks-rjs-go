import { LuLoader } from 'react-icons/lu'
import { useCartContext } from '../context/CartContext'
import { useProductsContext } from '../context/ProductsContext'
import { Product } from '../types'

export const ProductView = () => {
    const {currProduct} = useProductsContext()
    const {addToCart} = useCartContext()

  return (
    <>
        {currProduct ? <div className=" rounded-md flex flex-col w-[85%] sm:w-full mx-auto sm:mx-0 p-3 gap-5 pb-5 mb-5">
            <div className="flex flex-col sm:flex-row sm:gap-8">
                <img src={currProduct?.image} alt={currProduct?.name} className="h-96 sm:w-72  shadow-sm shadow-zinc-200 rounded-md" />
                <div className="flex flex-col w-full">
                    <p className="text-3xl font-semibold text-black">
                        {currProduct?.name}
                    </p>
                    <p className="text-zinc-500 text-lg mb-2">{currProduct?.price}</p>

                    <div className="flex gap-2 w-full sm:flex-col">
                        <button onClick={() => addToCart(currProduct as Product)} className="btn w-1/2 sm:w-96 bg-red-600 hover:bg-red-700 text-white border-0 shadow-sm shadow-zinc-300">Add to cart</button>
                        <button className="btn w-1/2 sm:w-96 bg-yellow-300 text-black border-0 shadow-sm shadow-zinc-300 hover:bg-yellow-400">Buy now</button>
                        
                        <p className='font-semibold text-black mt-2'>Sizes</p>
                        <div className="flex gap-2">
                            <button className='btn text-yellow-300'>Mens 6-12</button>
                            <button className='btn btn-outline'>Womens 6-12</button>
                            <button className='btn btn-outline'>Youth</button>
                        </div>
                    </div>
                </div>
            </div>
            
            

        </div>
        : <div className='h-96 flex justify-center items-center rounded-md bg-white flex-col w-[85%] mx-auto p-3 gap-5 pb-5 mb-5'>
            <LuLoader  className='animate-spin text-3xl'/>
        </div>
        }
    
    </>
  )
}
