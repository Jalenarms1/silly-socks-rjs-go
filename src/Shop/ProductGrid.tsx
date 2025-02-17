import React from 'react'
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { Product } from '../models/Cart'
import { useNavigate } from 'react-router-dom';
import { TbLoaderQuarter } from "react-icons/tb";


const ProductGrid = ({products, renderItem}: {products: Product[], renderItem: (product: Product) => React.ReactNode}) => {
  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 px-1 gap-2 p-1 bg-zinc-200'>
      {products.map((product, i) => (
        renderItem(product)
      ))}
      {products.length == 0 && [...Array(20)].map(i => (
        <div className="max-w-full flex flex-col gap-1 border-zinc-300 text-red-500 bg-white shadow-sm rounded-md min-w-48 h-72 relative justify-center items-center">
          <div className="inset-0 w-full h-full bg-zinc-100 flex justify-center items-center">
            <TbLoaderQuarter className='text-4xl text-red-500 animate-spin' />

          </div>
          <div className="w-full p-4 bg-zinc-100 absolute bottom-0"></div>
        </div>
      ))}

        {/* <div className="min-w-full rounded-sm border active:scale-[.95] flex flex-col justify-center items-center gap-1 border-zinc-300 p-2   text-red-500">
            <div className="flex flex-col items-center gap-2">
                <FaRegArrowAltCircleRight className='text-4xl text-zinc-400' />
                <p className='text-sm'>See more</p>
            </div>
        </div> */}
    </div>
  )
}

export default ProductGrid
