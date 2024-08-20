import React from 'react'
import { PiSealWarning } from 'react-icons/pi'

export const FreeShippingAlert = () => {
  return (
    <div className="bg-yellow-300 max-w-md py-3 px-2 flex text-black items-center gap-2 rounded-md">
        <PiSealWarning className='text-5xl' />

        <p className="text-sm">Free shipping on orders over $20 for a limited time only.</p>
    </div>
  )
}
