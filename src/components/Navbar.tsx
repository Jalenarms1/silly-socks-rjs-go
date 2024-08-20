import React from 'react'
import logo from '../assets/sockslogo.png'


const Navbar = () => {
  return (
    <div className="flex justify-between bg-white items-center w-full px-4 shadow-sm shadow-zinc-300 text-black">
        <div className="">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 active:scale-[.95]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7" />
              </svg>
            </div>
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
          <a className="btn btn-ghost">
              <img src={logo} alt="logo" className="w-16 h-16"  />
          </a>
        </div>
        <div className="mr-4">
          <div className="indicator active:scale-[.95]">
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
            <span className="badge badge-sm indicator-item text-white">8</span>
          </div>
        </div>
    </div>  
  )
}

export default Navbar
