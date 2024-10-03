import React from 'react'
import Navbar from './Navbar'
import { Footer } from './Footer'

const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='w-full min-h-screen bg-white flex flex-col relative'>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
