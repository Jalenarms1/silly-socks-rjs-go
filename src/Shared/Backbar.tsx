import React from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'

const Backbar = () => {
    const navigate = useNavigate()
  return (
    <div className="flex p-2 bg-zinc-900">
        <div onClick={() => navigate(-1)} className="flex items-center">
            <IoIosArrowBack className='text-xl text-zinc-300' />
            <p className='text-zinc-300 text-sm'>Back</p>

        </div>
    </div>
  )
}

export default Backbar
