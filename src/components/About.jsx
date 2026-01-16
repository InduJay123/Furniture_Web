import { assets } from "../assets/assets"
import { motion } from "motion/react"

const About = () => {
  return (
    <motion.div 
        initial={{opacity:0, x:200}}
        transition={{duration: 1}}
        whileInView={{opacity:1, x:0}}
        viewport={{once: true}}
        className="flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden" id="About">
        <h1 className="text-2xl sm:text-4xl font-bold mb-2">About <span className="underline underline-offset-4 decoration-1 under font-light">Our Brand</span></h1>
        <p className="text-gray-500 max-w-80 text-center mb-8">Crafting Dreams with Passion Your Vision, Our Craft Passion Meets Your Style Designing Dreams</p>
        <div className="flex flex-col md:flex-row items-center md:items-start md:gap-20">
            <img src={assets.brand_img} alt="" className="w-full sm:w-1/2 max-w-lg max-h-full mt-16" />
            <div className="flex flex-col items-center md:items-start mt-4 text-gray-600">
                <div className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28">
                    <div >
                    <div className="mb-8">
                        <p className="text-4xl text-yellow-400 font-medium text-gray-800 mb-1">10+</p>
                        <p>Years of Excellence</p>
                    </div>
                    <div className="mb-8">
                        <p className="text-4xl text-yellow-400 font-medium text-gray-800">18K+</p>
                        <p>Furnitures Designed</p>
                    </div>
                    <div className="mb-8">
                        <p className="text-4xl text-yellow-400 font-medium text-gray-800">200K+</p>
                        <p>Items Delivered</p>
                    </div>
                    <div className="mb-4">
                        <p className="text-4xl text-yellow-400 font-medium text-gray-800">12+</p>
                        <p>Professional Designers</p>
                    </div>
                    </div>
                    <div className="border-l-2 border-blue-800 pl-6 space-y-2">
                        <h1 className="text-2xl font-semibold">Modi Furn</h1>
                        <p className=" max-w-lg">
Transform your living spaces into stylish sanctuaries. From elegant sofas to timeless tables, Furniture Haven is your trusted partner in creating a home that reflects your unique style. Let us help you bring your dream interiors to life.
You can further tailor this description to align with your brand’s personality and specific offerings! </p>
                    </div>
                </div>
                <button className="bg-[#5A3E2B] text-white px-8 py-2 rounded ">Read more</button>
            </div>
        </div>
    </motion.div>
  )
}

export default About
