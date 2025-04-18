import { assets } from "../assets/assets"


const Footer = () => {
  return (
    <div className="pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden " id="Footer">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
        <div className="w-full md:w-1/3 flex flex-col items-start space-y-4">
            <img src={assets.img10} alt="" className='h-20 w-40 rounded-sm'/>
            <p className="text-gray-400">
            Transform your living spaces into stylish sanctuaries. From elegant sofas to timeless tables, Furniture Haven is your trusted partner in creating a home that reflects your unique style. Let us help you bring your dream interiors to life.
            You can further tailor this description to align with your brand’s personality and specific offerings! 
            </p>
        </div>

        <div className="w-full md:w-1/3 flex flex-col items-start space-y-4">
            <h3 className="text-white text-lg font-bold">Company</h3>
            <ul className="flex flex-col gap-2 text-gray-400">
                <a href="#Header" className="hover:text-white">Home</a>
                <a href="#About" className="hover:text-white">About</a>
                <a href="#Contact" className="hover:text-white">Contact us</a>
                <a href="#" className="hover:text-white">Privacy policy</a>
            </ul>
        </div>

    <div className="w-full md:w-1/3 flex flex-col items-start space-y-4">
        <h3 className="text-white text-lg font-bold">Subscribe to our newsletter</h3>
        <p className="text-gray-400">
            The latest news, articles and resources, sent to your inbox weekly.
        </p>
        <div className="flex flex-col md:flex-row gap-2 w-full">
            <input
                type="email"
                placeholder="Enter your email"
                className="p-2 rounded bg-gray-800 text-gray-400 border border-gray-700 focus:outline-none flex-1"
            />
            <button className="py-2 px-4 rounded bg-blue-500 text-white">Subscribe</button>
        </div>
    </div>
</div>

      <div className="border-t border-gray-700 py-4 mt-10 text-center text-gray-500">
        Copyright &copy; 2024 Modi Furn. All Right Reserved
      </div>
    </div>
  )
}

export default Footer
