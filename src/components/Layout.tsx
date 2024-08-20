import React from 'react'
import Navbar from './Navbar'
import { Footer } from './Footer'
import { StickyCart } from './StickyCart'

const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='w-full min-h-screen bg-zinc-100 flex flex-col relative'>
      <Navbar />
      {children}
      <StickyCart />
      <Footer />
    </div>
  )
}

export default Layout
