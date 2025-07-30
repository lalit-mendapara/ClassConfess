import React from 'react'
import { IoMdSearch } from "react-icons/io";


function Navbar() {
  return (
    <header className='bg-white]'>
        <nav className='max-w-[1400px] mx-auto h-[14vh] px-10 items-center flex justify-between '>
            <a href="#" className='text-3xl font-bold text-black'>
                Class<span className='text-[#f88d07] uppercase'>c</span>onfess
            </a>
            {/*Desktop Menu */}
            <ul className='flex items-center gap-x-15'>
                <li>
                    <a href="#" className='text-[#f88d07] hover:text-black font-semibold tracking-wider'>Home</a>
                </li>
                <li>
                    <a href="#" className='text-[#f88d07]  hover:text-black font-semibold tracking-wider'>About Us</a>
                </li>
                <li>
                    <a href="#" className='text-[#f88d07]  hover:text-black font-semibold tracking-wider'>Process</a>
                </li>
                <li>
                    <a href="#" className='text-[#f88d07]  hover:text-black font-semibold tracking-wider'>Contact Us</a>
                </li>
            </ul>
            {/* Nav action */}
            <div className='flex text-x p-1 border-2 rounded-full border-[#f88d07]'>
                <input className='flex-1 px-3 focus:outline-none ' type="text"  name='text' id='text' placeholder='Search...' autoComplete='off'/>
                <button className='bg-gradient-to-b from-black to-orange-500 text-2xl text-white rounded-full flex justify-center items-center w-8 h-8'>
                    <IoMdSearch />
                </button>
            </div>
            <div className='flex justify-center items-center gap-x-5'>
                <a href="#" className='text-[#f88d07]'>Login</a>
                <a href="#" className='text-[#f88d07]'>Registraion</a>
            </div>
        </nav>
    </header>
  )
}

export default Navbar