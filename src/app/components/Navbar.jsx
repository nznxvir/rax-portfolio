import React from 'react'
import { scrolltoSection } from '../utils/Scrollpage'

const Navbar = () => {

  return (
    <nav className='fixed top-0 left-0 right-0 flex flex-row items-center justify-between p-10 text-[#EEEEEE] shadow-lg border-b-1 border-[#3c3c3c] bg-[#222831] z-50'>
        <h1 className='ml-12 sigmar-font font-extrabold text-4xl'>RaxLab</h1>
        <div className=' flex flex-row gap-10 font-medium text-lg'>
            <span onClick={() => scrolltoSection("home")} className='hover:text-[#00ADB5] hover:cursor-pointer'>Home</span>
            <span onClick={() => scrolltoSection("aboutme")} className='hover:text-[#00ADB5] hover:cursor-pointer'>About me</span>
            <span onClick={() => scrolltoSection("idea")} className='hover:text-[#00ADB5] hover:cursor-pointer'>Idea</span>
        </div>
    </nav>
  )
}

export default Navbar
