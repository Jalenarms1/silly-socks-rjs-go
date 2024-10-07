import {useEffect} from "react"
import {useParams} from "react-router-dom"
import { useProductsContext } from "../context/ProductsContext"
import { IoCaretBackOutline } from "react-icons/io5";
import {Link} from "react-router-dom"
import { ProductView } from "../components/ProductView";
import { ProductCarousel } from "../components/ProductCarousel";
// import { RelatedProducts } from "../components/RelatedProducts";
// import { StickyCart } from "../components/StickyCart";

export const PageProduct = () => {
    const {productId} = useParams()
    const {getProduct} = useProductsContext()
    

    useEffect(() => {
        if(productId) {
            getProduct(productId)
            window.scrollTo(0,0)
        }
    }, [productId])

  
    
  return (
    <div className="flex flex-col sm:mx-12">
        <div className=" text-white p-4 pb-2">
            <Link to={"/"}>
                <button className="btn border-white bg-red-600 hover:bg-red-700 text-white px-2 py-3 min-h-0 h-fit ">
                    <IoCaretBackOutline /> Go back
                </button>
            
            </Link>
        </div>
        <ProductView />
        <ProductCarousel label="More socks" />
        {/* <RelatedProducts /> */}
        {/* <StickyCart /> */}
    </div>
  )
}
