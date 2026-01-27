import { assets, testimonialsData } from "../assets/assets"
import { motion } from "motion/react"


const Comments = () => {
  return (
    <motion.div 
        initial={{opacity:0, x:100}}
        transition={{duration: 1}}
        whileInView={{opacity:1, x:0}}
        viewport={{once: true}}
    className="Container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden" id="Testimonials">
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">Customer <span className="underline underline-offset-4 decoration-1 under font-light">Testimonials</span></h1>
      <p className="text-center text-gray-500 mb-8 max-w-80 mx-auto">What Customer Says</p>

      <div className="">

      </div>
    </motion.div>
  )
}

export default Comments
