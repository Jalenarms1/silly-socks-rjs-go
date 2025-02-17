import React from 'react'
import { BsSliders2 } from 'react-icons/bs'
// import { HiMiniMagnifyingGlass } from 'react-icons/hi2'
import { CiSearch } from "react-icons/ci";
import { ProductViewType } from '../hooks/useProducts';


const SearchAndFilter = ({onViewChange, currProductView, searchTerm, setSearchTerm}: {onViewChange: (view: ProductViewType) => void, currProductView: ProductViewType, searchTerm: string, setSearchTerm: (val: string) => void}) => {

  return (
    <div className="flex w-full md:justify-end">
      <div className="flex flex-col w-full md:w-[25%] gap-2">
          <div className="flex p-1 gap-2">
              <div className="flex bg-white p-2 w-full items-center gap-2 rounded-full shadow shadow-zinc-300">
              <CiSearch className='text-zinc-600' />
              <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} type="text" placeholder='Search for a theme or product'  className='text-base text-black font-sans focus:outline-0 w-full'/>
              </div>
              {/* <div className="flex active:scale-[.95] bg-zinc-100 p-2 w-1/5 items-center justify-center gap-2 rounded-sm border border-zinc-300">
              <BsSliders2 className='text-red-500 text-2xl' />
              </div> */}
          </div>
          <div className="grid grid-cols-4 gap-1 px-1">
              <p onClick={() => onViewChange("All")} className={`text-sm font-semibold text-center active:scale-[.95] ${currProductView == "All" ? "bg-red-500" : "bg-zinc-400"}   text-white p-1 rounded-sm `}>
              All
              </p>
              <p onClick={() => onViewChange("Socks")} className={`text-sm font-semibold text-center active:scale-[.95] ${currProductView == "Socks" ? "bg-red-500" : "bg-zinc-400"}   text-white p-1 rounded-sm `}>
              Socks
              </p>
              <p onClick={() => onViewChange("Slippers")} className={`text-sm font-semibold text-center active:scale-[.95] ${currProductView == "Slippers" ? "bg-red-500" : "bg-zinc-400"}   text-white p-1 rounded-sm `}>
              Slides
              </p>
              <p onClick={() => onViewChange("Charms")} className={`text-sm font-semibold text-center active:scale-[.95] ${currProductView == "Charms" ? "bg-red-500" : "bg-zinc-400"}   text-white p-1 rounded-sm `}>
              Charms
              </p>
          </div>
      </div>

    </div>
  )
}

export default SearchAndFilter
