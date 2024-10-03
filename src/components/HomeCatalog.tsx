import { FaSocks } from "react-icons/fa";
import { LiaPuzzlePieceSolid } from "react-icons/lia";
import { CarouselCardType } from '../types';
import { FreeShippingAlert } from './FreeShippingAlert';
import { useProductsContext } from '../context/ProductsContext';
import { CarouselCard } from './CarouselCard';
import { IoBagAddOutline } from "react-icons/io5";
import { useCartContext } from "../context/CartContext";


const productTypeCards: CarouselCardType[] = [
    {
        type: "Silly Socks", 
        icon: <FaSocks className='text-yellow-400 text-2xl' />, 
        description: "Search through a variety of designs to find your funk. Available in men, woman and youth.",
        filter: (data) => data.filter((d) => d.category == 'Socks')
    },
    {
        type: "Croc Charms", 
        icon: <LiaPuzzlePieceSolid className='text-2xl text-red-500' />, 
        description: "Find gibbets for your favorite cartoons, sports teams and more. Attach them to your crocs for more style!",
        filter: (data) => data.filter((d) => d.category == 'Charms')
    }
]

export const HomeCatalog = () => {
    const {products} = useProductsContext()
    const {addToCart} = useCartContext()
  return (
    <div className="w-full py-4 flex flex-col">
        <div className="flex flex-col gap-3 mb-5">
            <p className="text-4xl font-semibold p-2 text-black border-b font-serif">Shop</p>
            {/* {productTypeCards.map((c, i) => (
                <CarouselCard key={i} products={products} c={c} />

            ))} */}
            <div className="carousel">
                {products.map((p) => (
                    <div key={p.id} className="carousel-item w-full h-[450px] relative shadow-sm shadow-zinc-200">
                        <img
                        src={p.image}
                        alt="Burger"
                        className="w-full h-96 object-cover" />
                        <div className="absolute top-0 left-0 p-2 m-2">
                            <p className="font-semibold text-xl font-mono">${p.price}</p>
                        </div>
                        <div className="absolute bottom-0  w-[95%]">
                            {/* {!saved.find(p => p.id == product.id) ? <IoHeart onClick={() => addToSaved(product)} className="text-3xl    text-white" /> 
                            :
                            <IoHeartSharp className="text-3xl    text-red-600" />
                            } */}
                            <div className="flex justify-between items-center gap-2 w-full m-2">
                                <p className="text-black font-semibold text-lg font-mono">{p.name}</p>
                                <div className="bg-yellow-300 p-2 rounded-full active:scale-[.95] shadow-sm shadow-slate-600 ">
                                    <IoBagAddOutline onClick={() => addToCart(p)} className="text-3xl    text-black" />

                                </div>

                            </div>

                        </div>
                    </div>
                ))}
                
                
            </div>
            
        </div>

    </div>
  )
}
