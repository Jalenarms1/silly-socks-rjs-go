import { CiMenuFries } from "react-icons/ci";
import logo from '../assets/sockslogo.png'
import {Link} from "react-router-dom"
import { useCartContext } from "../context/CartContext";

const Navbar = () => {
  const {itemsInCart} = useCartContext()

  return (
    <div className="flex justify-between bg-white items-center w-full px-4 shadow-sm shadow-zinc-300 text-black">
        <div className="">
          <div className="dropdown">
            <CiMenuFries className="text-3xl active:border border-zinc-300 active:scale-[.95] rounded-md font-semibold" />
            <ul
              tabIndex={0}
              className="menu menu-lg  dropdown-content bg-white z-[1] mt-3 rounded-sm p-2 shadow shadow-zinc-400"
            >
              <li><a>Homepage</a></li>
              <li><a>Portfolio</a></li>
              <li><a>About</a></li>
            </ul>
          </div>
        </div>
        <div className="">
          <Link to={"/"} className="">
            <img src={logo} alt="logo" className="w-16 h-16"  />
          </Link>
        </div>
        <div className="mr-4">
          <Link to={"/cart"} className="indicator active:scale-[.95]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>  
            <span className="badge badge-sm indicator-item text-white">{itemsInCart()}</span>
          </Link>
        </div>
    </div>  
  )
}

export default Navbar
