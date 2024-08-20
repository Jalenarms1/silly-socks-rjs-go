import React from 'react'
import { CatalogSlides } from './CatalogSlides';
import { FaSocks } from "react-icons/fa";
import { LiaPuzzlePieceSolid } from "react-icons/lia";
import { Product } from '@/types';
import { FreeShippingAlert } from './FreeShippingAlert';

type ProductType = {
    type: string,
    icon: React.ReactNode,
    description: string,
    filter: (data: Product[]) => Product[]
}
const productTypeCards: ProductType[] = [
    {
        type: "Silly Socks", 
        icon: <FaSocks className='text-yellow-400 text-2xl' />, 
        description: "Search through a variety of designs to find your funk. Available in men, woman and youth.",
        filter: (data) => data.filter((d) => d.category == 'socks')
    },
    {
        type: "Croc Charms", 
        icon: <LiaPuzzlePieceSolid className='text-2xl text-red-500' />, 
        description: "Find gibbets for your favorite cartoons, sports teams and more. Attach them to your crocs for more style!",
        filter: (data) => data.filter((d) => d.category == 'charms')
    }
]

export const HomeCatalog = () => {
  return (
    <div className="w-full px-4 py-4 flex flex-col">
        <FreeShippingAlert />
        <div className="flex flex-col gap-5">
            <p className="text-4xl font-semibold p-2 text-black">Shop</p>
            {productTypeCards.map((c, i) => (
                <div className="card  w-[98%] mx-auto shadow-sm shadow-zinc-500 border border-zinc-300 rounded-md bg-white">
                    <CatalogSlides />
                    <div className="card-body shadow-inner">
                        <div className="flex items-center gap-2 text-black">
                            <h2 className="card-title text-2xl">{c.type}</h2>
                            {c.icon}
                        </div>
                        <p className="w-[90%] text-black mb-2">{c.description}</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-ghost border border-zinc-400 text-black">See more</button>
                        </div>
                    </div>
                </div>

            ))}
            
            
        </div>
    </div>
  )
}
