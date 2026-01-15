import Navbar from "./Navbar"
import { motion } from "motion/react"
import livingRoom from "../assets/hero-living-room.jpg";

const Header = () => {
  return (
    <div className="min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden" 
      style={{backgroundImage: `url(${livingRoom})`}} id="Header">
      <div className="absolute inset-0 bg-black/30"></div>

      <Navbar/>
      <motion.div 
      initial={{opacity:0, y:100}}
      transition={{duration: 1.5}}
      whileInView={{opacity:1, y:0}}
      viewport={{once: true}}
      className="container relative z-10 text-center mx-auto py-4 mt-8 px-6 md:px-20 lg:px-32 text-white">
          <h2 className="text-7xl sm:text-[8px] md:text-[90px] inline-block max-w-3xl font-semibold z-10">INTERIOR </h2><br/>
          <h2 className="text-7xl sm:text-[6px] md:text-[90px] inline-block max-w-3xl font-semibold z-10">DESIG</h2>
          <h2 className="text-7xl sm:text-[6px] md:text-[82px] spin  right-[26%] top-[30%] inline-block max-w-3xl font-semibold">N</h2>
          <br/>
        <h3 className="text-md sm:text-1px md:text-[30px] inline-block max-w-4xl mt-6 text-white/70">| Every space has a story</h3>
        <div className="space-x-6 mt-36">
            <a href="#Projects" className="border border-white px-8 py-3 rounded">Contact Us</a>
            <a href="#Contact" className="bg-green-800/90 px-8 py-3 rounded ">Shop Now</a>
        </div>
      </motion.div>
    </div>
  )
}

export default Header
