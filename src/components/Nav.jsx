import React, { useState } from 'react'
import '../static/Nav.css'
import image from '../assets/logo1.png'
import { AiOutlineMenu } from 'react-icons/ai'
import { AiOutlineClose } from 'react-icons/ai'

const Nav = () => {
  const [openmenu,setOpenmenu]=useState(false)
  return (
    <div className=' w-full items-center relative justify-center h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64'>
        <div className='w-full flex justify-between items-center'>
            <img  className=' flex h-10 w-40' src={image} alt='no image'/>
            <ul className="md:gap-3 lg:gap-5 hidden md:flex">
                <li>Home</li>
                <li>About Me</li>
                <li>Services</li>
                <li>Portfolio</li>
                <li>Contact</li>
            </ul>
            <div className='nav_connect hidden md:flex'>Connect With Me</div>
            <div  className='md:hidden' onClick={()=>setOpenmenu(!openmenu)}><AiOutlineMenu/></div>
            {openmenu && <div className='md:w-[30%] w-[60%] py-30 pt-10 absolute top-0 left-0 rounded-md text-black bg-[#d8caca] h-[cal(100vh-80px)]'>
              <div onClick={()=>setOpenmenu(!openmenu)} className='w-full py-1 flex justify-end items-end p-2 text-end'>
              < AiOutlineClose className='text-[20px]  text-black font-bold '/>
              </div>
            <ul className="flex w-full flex-col text-black text-[1.3rem] font-bold justify-center items-center text-center gap-6 md:hidden">
                <li className='border-b border-b-gray-500 w-[80%] '>Home</li>
                <li className='border-b border-b-gray-500 w-[80%]  '>About Me</li>
                <li className='border-b border-b-gray-500 w-[80%] justify-center items-center '>Services</li>
                <li className=' border-b border-b-gray-500 w-[80%] justify-center items-center '>Portfolio</li>
                <li className=' '>Contact</li>
            </ul>
            </div>}
        </div>
        
    </div>
  )
}

export default Nav