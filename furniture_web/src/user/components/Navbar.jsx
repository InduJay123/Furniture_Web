import { useState } from 'react'
import {assets} from '../../assets/assets'
import { useEffect } from 'react';
import { motion } from "motion/react"
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const navigate = useNavigate();
     useEffect(() => {
        document.body.style.overflow = showMobileMenu ? 'hidden' : 'auto';
      }, [showMobileMenu]);

      // Detect scroll
      useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 50) setScrolled(true);
          else setScrolled(false);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);

    useEffect(()=>{
        if(showMobileMenu){
            document.body.style.overflow='hidden'
        }else{
            document.body.style.overflow='auto'
        }
        return ()=>{
            document.body.style.overflow='autp'
        }
    },[showMobileMenu])
  return (
    <motion.div 
      initial={{opacity:0, y:-20}}
      transition={{duration: 1.5}}
      whileInView={{opacity:1, y:0}}
      viewport={{once: true}}
      className={`fixed top-0 left-0 w-full z-10   ${
        scrolled ? 'bg-white/90 text-black shadow-md backdrop-blur-md' : 'bg-transparent text-white'
      }`}>
      <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent'>
        <motion.img 
        initial={{opacity:0, x:-100}}
        transition={{duration: 1}}
        whileInView={{opacity:1, x:0}}
        viewport={{once: true}}
        src={assets.img10} alt="" className='h-20 w-32 rounded-sm' />
        <motion.ul 
        initial={{opacity:0, y:-20}}
        transition={{duration: 1.5}}
        whileInView={{opacity:1, y:0}}
        viewport={{once: true}}
        className='hidden md:flex gap-7'>
            <a href='#Header' className='cursor-pointer  hover:scale-110'>Home</a>
            <a href='#About' className='cursor-pointer  hover:scale-110'>About</a>
            <a href='#Projects' className='cursor-pointer hover:scale-110'>Products</a>
            <a href='#Testimonials' className='cursor-pointer hover:scale-110'>Testimonials</a>
        </motion.ul>
        <motion.button 
          initial={{opacity:0, x:200}}
          transition={{duration: 1}}
          whileInView={{opacity:1, x:0}}
          viewport={{once: true}}
          onClick={() => navigate("/auth")}
          className='hidden md:block bg-white px-8 py-2 rounded-full hover:bg-gray-500 hover:text-white text-black'>Sign Up</motion.button>
          <img onClick={()=>setShowMobileMenu(true)} src={assets.menu_icon} className='md:hidden w-7 cursor-pointer' alt=''/>
      </div>
      {/*----------mobile-menu-----------*/}
      <div className={`md:hidden ${showMobileMenu ?  'fixed w-full' : 'h-0 w-0'} right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}>
      <div className='flex justify-end p-6 cursor-pointer'>
        <img onClick={()=>setShowMobileMenu(false)} src={assets.cross_icon} className='w-6 ' alt=''/>
      </div>
        <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
            <a onClick={()=>setShowMobileMenu(false)} href='#Header' className='px-4 py-2 rounded-full inline-block'>Home</a>
            <a onClick={()=>setShowMobileMenu(false)} href='#About' className='px-4 py-2 rounded-full inline-block'>About Us</a>
            <a onClick={()=>setShowMobileMenu(false)} href='#Projects' className='px-4 py-2 rounded-full inline-block'>Projects</a>
            <a onClick={()=>setShowMobileMenu(false)} href='#Testimonials' className='px-4 py-2 rounded-full inline-block'>Testimonials</a>
        </ul>
      </div>
    </motion.div>
  )
}

export default Navbar
