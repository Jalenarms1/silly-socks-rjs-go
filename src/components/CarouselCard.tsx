import { CarouselCardType, Product } from "../types"
import { CatalogSlides } from "./CatalogSlides"

export const CarouselCard = ({products, c}: {products: Product[], c: CarouselCardType}) => {
  return (
    <div className="card  w-[98%] mx-auto  shadow-sm shadow-zinc-500 border border-zinc-300 rounded-md bg-white">
      <CatalogSlides products={products} />
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
  )
}
