import { Product } from "../types"
import { IoBagAddOutline } from "react-icons/io5";


const Slide = ({product}: {product: Product}) => {

    return (
        <div className="carousel-item min-w-60 max-w-60 relative">
            <div className="w-full">
                <img
                src={product.image}
                className="rounded-md  shadow-sm shadow-zinc-500 w-full h-96" />

            </div>
            <div className="absolute w-full top-0  p-2 bg-zinc-800 rounded-lg shadow-sm shadow-zinc-500">
                
                    <p className="text-xl truncate text-yellow-300 font-semibold">${product.price}</p>

                
            </div>
            <div className="absolute w-full bottom-0 flex  items-center p-3 justify-end ">
                
                {/* <p className="text-3xl">+</p> */}
                <div className="bg-yellow-300 p-2 rounded-full active:scale-[.95] shadow-sm shadow-slate-600">
                    <IoBagAddOutline className="text-3xl    text-black" />

                </div>
                
            </div>
        </div>
    )
}

export const CatalogSlides = ({products}: {products: Product[]}) => {

  return (
    <div className="carousel carousel-center bg-zinc-100 rounded-md space-x-4 p-4">
        {products.length > 0 && products.map((p: Product, i: number) => (
            <Slide key={i} product={p}/>

        ))}
    </div>
  )
}
