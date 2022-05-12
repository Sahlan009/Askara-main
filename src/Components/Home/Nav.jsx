import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import Logo from '../../Assets/logo.png'
import {Button} from '@mui/material'

const Navbar = ({OpenModal}) => {
  const  [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div className='bg-[#EEEE]'>
    <div className='p-1 flex items-center justify-between text-black max-w-[1080px] mx-auto px-1'>
    <h1 className='items-center flex w-full text-2xl font-bold '>
      <img className='w-20' src={Logo} alt="logo" />
      Askara Outdoor</h1>

    <ul className='hidden md:flex text-lg font-bold'>
      <li className='p-4'>Home</li>
      <li className='p-4'>About</li>
      <li className='p-4'>Contact</li>
      <Button 
      size='small' 
      variant='outline' 
      onClick={OpenModal}>Sign In</Button>
    </ul>
    <div onClick={handleNav} className="block md:hidden">
      {nav ? <AiOutlineClose size={24}/> : <AiOutlineMenu size={24}/>}
    </div>
    <div className={nav ? 'fixed left-0 top-0 w-[60%] border-r border-r-gray-800 h-full bg-[#EEEE] ease-in-out duration-500' : 'fixed left-[-100%]'}>
    <h1 className='p-3 items-center flex w-full text-2xl font-bold m-4 '>
      <img className='w-20' src={Logo} alt="logo" />
      Askara Outdoor</h1>
      <ul className='uppercase p-4'>
      <li className='p-4 border-b border-b-gray-400'>Home</li>
      <li className='p-4 border-b border-b-gray-400'>About</li>
      <li className='p-4 border-b border-b-gray-400'>Contact</li>
      <li className='p-4 border-b border-b-gray-400'>Login</li>
      </ul>
    </div>
    </div>
    </div>
  )
}

export default Navbar;