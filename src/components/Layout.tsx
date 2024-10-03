import React from 'react'
import Navbar from './Navbar'
import { Footer } from './Footer'

const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='w-full min-h-screen bg-white flex flex-col relative'>
      <Navbar />
      <div className='flex-1'>
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
