import React from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'

const Backbar = () => {
    const navigate = useNavigate()
  return (
    <div className="flex p-2 bg-zinc-300">
        <div onClick={() => navigate(-1)} className="flex items-center">
            <IoIosArrowBack className='text-2xl text-zinc-400' />
            <p className='text-zinc-700 font-semibold'>Back</p>

        </div>
    </div>
  )
}

export default Backbar
