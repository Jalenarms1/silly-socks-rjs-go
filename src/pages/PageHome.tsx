// import { FreeShippingAlert } from "../components/FreeShippingAlert"
import { ProductCarousel } from "../components/ProductCarousel"
// import { StickyCart } from "../components/StickyCart"
import { GiSocks , GiCrocJaws} from "react-icons/gi";
// import logo from '../assets/sockslogo.png'
import { FaBagShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";


export const PageHome = () => {
  return (
    <div className="flex flex-col sm:px-12">
      <div className="w-full p-4  text-white flex flex-col gap-4 items-center text-center">
          <div className="flex flex-col items-center gap-4 mt-4">
              <p className="text-3xl sm:text-6xl text-black font-bold font-mono sm:my-2">Silly Socks and More</p>
              <div className="flex items-center">
                {/* <img src={logo} alt="logo" className="w-44 h-44 object-contain"  /> */}

                <GiSocks className="text-red-500 text-3xl sm:text-5xl" />
                <GiCrocJaws className="text-red-500 text-3xl sm:text-5xl" />
              </div>
              <Link to={`/shop`} className="btn bg-yellow-300 hover:bg-yellow-400 text-black shadow-sm shadow-zinc-100 border-0 rounded-full w-fit px-8 mt-2 flex items-center">
                <FaBagShopping />
                <span>Shop now</span>
              </Link>
              
              {/* <p className="text-sm text-zinc-200">Sign up to recieve email notifications on new products.</p> */}
          </div>
          {/* <button className="btn bg-blue-500 hover:bg-blue-600 w-fit px-6 text-white">Sign Up</button> */}

      </div>
      {/* <FreeShippingAlert /> */}

      <ProductCarousel label="Shop" />
      {/* <StickyCart /> */}

    </div>
  )
}
