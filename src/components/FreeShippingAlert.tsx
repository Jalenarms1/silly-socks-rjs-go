import { PiSealWarning } from 'react-icons/pi'

export const FreeShippingAlert = () => {
  return (
    <div className="bg-yellow-300 max-w-md py-3 px-2 sm:mx-auto flex text-black items-center gap-2 rounded-md m-3">
        <PiSealWarning className='text-5xl' />

        <p className="text-sm">Free shipping on orders over $20 for a limited time only.</p>
    </div>
  )
}
