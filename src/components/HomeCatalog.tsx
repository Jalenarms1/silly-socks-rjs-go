import { FaSocks } from "react-icons/fa";
import { LiaPuzzlePieceSolid } from "react-icons/lia";
import { CarouselCardType } from '../types';
import { FreeShippingAlert } from './FreeShippingAlert';
import { useProductsContext } from '../context/ProductsContext';
import { CarouselCard } from './CarouselCard';


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
  return (
    <div className="w-full px-4 py-4 flex flex-col">
        <FreeShippingAlert />
        <div className="flex flex-col gap-5">
            <p className="text-4xl font-semibold p-2 text-black">Shop</p>
            {productTypeCards.map((c, i) => (
                <CarouselCard key={i} products={products} c={c} />

            ))}
            
            
        </div>

    </div>
  )
}
