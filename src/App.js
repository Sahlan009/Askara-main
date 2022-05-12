import React,{useState} from 'react'
import Navbar from './Components/Home/Nav'
import Hero from './Components/Home/Hero'
import './index.css'
import Newsletter from './Components/Home/Newsletter'
import Cards from './Components/Home/Cards'
import Footer from './Components/Home/Footer'
import LoginModal from './Components/Login/Login'
import Content from './Components/Home/Content'

export default function Home() {
  const [open, setOpen] = useState(false)
  return (
    <>
    <Navbar OpenModal={()=> setOpen(true)}/>
    <Hero/>
    <Content/>
    <Newsletter/>
    <Cards/>
    <Footer/>
    <LoginModal open={open} CloseModal={()=>setOpen(false)}/>
    </>
  )
}
