import { CatalogSlides } from "./CatalogSlides";
import { useProductsContext } from "../context/ProductsContext";
import { AiOutlineLike } from "react-icons/ai";


export const RelatedProducts = () => {
  const {products} = useProductsContext()

  return (
    <div className="bg-white p-4 shadow-inner shadow-zinc-200 flex flex-col gap-4">
        <div className="flex items-center gap-2 border-b p-4 border-zinc-300 mb-4">
            <p className="text-2xl text-black">Others also like</p>
            <AiOutlineLike className="text-2xl text-black mt-1" />
        </div>
        <CatalogSlides products={products} />
    </div>
  )
}
