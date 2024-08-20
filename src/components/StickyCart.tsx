import React from 'react'

export const StickyCart = () => {
  return (
    <div className="navbar bg-white sticky bottom-0 w-full border-t border-zinc-400 shadow-sm shadow-zinc-200 text-black">
        <div className="flex flex-1 items-center gap-2">
            <p className='font-semibold text-lg'>Total:</p>
            <p className='text-lg '>$0</p>
        </div>
        <div className="flex-none">
        <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="badge badge-sm indicator-item text-white">4</span>
            </div>
            </div>
            <div
            tabIndex={0}
            className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
            <div className="card-body">
                <span className="text-lg font-bold">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                <button className="btn btn-primary btn-block">View cart</button>
                </div>
            </div>
            </div>
        </div>
        
        </div>
    </div>
  )
}
