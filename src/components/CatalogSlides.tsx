import { Product } from "../types"
import { IoBagAddOutline, IoHeart, IoHeartSharp } from "react-icons/io5";
import {Link} from "react-router-dom"
import { useCartContext } from "../context/CartContext";
import { LuLoader } from "react-icons/lu";

const Slide = ({product}: {product: Product}) => {
    const {addToCart, addToSaved, saved} = useCartContext()


    return (
        <div className="carousel-item min-w-60 max-w-60 relative">
            <Link to={`/product/${product.id}`} className="w-full">
                <img
                src={product.image}
                className="rounded-md  shadow-sm shadow-zinc-500 w-full h-96" />

            </Link>
            <div className="absolute w-full bottom-0  p-2 ">
                <p className="text-xl truncate text-black font-semibold">${product.price}</p> 
            </div>
            <div className="absolute w-full bottom-0 flex  items-center p-3 justify-end ">
                
                {/* <p className="text-3xl">+</p> */}
                <div className="bg-yellow-300 p-2 rounded-full active:scale-[.95] shadow-sm shadow-slate-600 flex flex-col gap-1">
                    {/* {!saved.find(p => p.id == product.id) ? <IoHeart onClick={() => addToSaved(product)} className="text-3xl    text-white" /> 
                    :
                    <IoHeartSharp className="text-3xl    text-red-600" />
                    } */}
                    <IoBagAddOutline onClick={() => addToCart(product)} className="text-3xl    text-black" />

                </div>
                
            </div>
        </div>
    )
}

export const CatalogSlides = ({products}: {products: Product[]}) => {

  return (
    <div className="carousel carousel-center bg-zinc-100 rounded-md space-x-4 p-4">
        {products.length > 0 ? products.map((p: Product, i: number) => (
            <Slide key={i} product={p}/>

        ))
    : <>
        <div className="carousel-item min-w-60 max-w-60 h-96 relative flex justify-center items-center bg-white">
            <LuLoader className="text-4xl animate-spin" />
           
        </div>
        <div className="carousel-item min-w-60 max-w-60 h-96 relative flex justify-center items-center bg-white">
            <LuLoader className="text-4xl animate-spin" />
           
        </div>
        <div className="carousel-item min-w-60 max-w-60 h-96 relative flex justify-center items-center bg-white">
            <LuLoader className="text-4xl animate-spin" />
           
        </div>
        <div className="carousel-item min-w-60 max-w-60 h-96 relative flex justify-center items-center bg-white">
            <LuLoader className="text-4xl animate-spin" />
           
        </div>
        <div className="carousel-item min-w-60 max-w-60 h-96 relative flex justify-center items-center bg-white">
            <LuLoader className="text-4xl animate-spin" />
           
        </div>
        <div className="carousel-item min-w-60 max-w-60 h-96 relative flex justify-center items-center bg-white">
            <LuLoader className="text-4xl animate-spin" />
           
        </div>
    </>
    }
        
    </div>
  )
}
