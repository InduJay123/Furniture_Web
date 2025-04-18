import { assets } from "../assets/assets"

const Banner = () => {
  return (
    <div className="py-2">
     <div className="h-96 mb-2 bg-cover bg-center flex items-center w-full h-10 overflow-hidden" 
    style={{backgroundImage: "url('/img5.avif')"}}>
      <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-8 ml-24">
        <div className="space-y-2 max-w-xl mx-auto">
          <h1 className="text-2xl text-center sm:text-left sm:text-4xl font-semibold pl-24 mb-10 text-white/90">Modi Furn is available for Android and IOS</h1>
          <div className="pl-24 flex flex-wrap justify-center sm:justify-start items-center mt-8">
            <a href="#">
              <img src={assets.img8} alt="" className="max-w-[150px] sm:max-w-[120px] md:max-w-[180px] mr-6 "/>
            </a>
            <a href="#">
              <img src={assets.img9} alt="" className="max-w-[150px] sm:max-w-[120px] md:max-w-[180px] "/>
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Banner
