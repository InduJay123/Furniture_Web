import { assets, testimonialsData } from "../../assets/assets"

import Slider from 'react-slick'

const Testimonials = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slideToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slideToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slideToScroll: 1,
          initialSlide: 2,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slideToScroll: 1,
        }
      },
    ]
  }
  return (
    <div>
    <div className="Container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden" id="Testimonials">
    {/* heder section */}
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">Customer <span className="underline underline-offset-4 decoration-1 under font-light">Testimonials</span></h1>
      <p className="text-center text-gray-500 mb-8 max-w-80 mx-auto">Real Stories from Those Who Designed with Us</p>
      <div>
        {/* <Slider>
            {testimonialsData.map((Testimonial, index) => {
              return <div key={index} className="my-6" >
                
              </div>
            })}
        </Slider> */}
      </div>

      {/* card dection */}
      <div>
      <Slider {...settings}>
         {testimonialsData.map((Testimonial, index)=>(
            <div key={index} className="max-w-[340px] border shadow-lg rounded px-8 py-12 text-center">
                <img className="w-20 h-20 rounded-full mx-auto mb-4" src={Testimonial.image} alt={Testimonial.alt}/>
                <h2 className="text-xl text-gray-700 font-medium">{Testimonial.name}</h2>
                <p className="text-gray-500 mb-4 text-sm">{Testimonial.title}</p>
                <div className="flex justify-center gap-1 text-red-500 mb-4">
                    {Array.from({length: Testimonial.rating} , (item ,index)=>(
                        <img key={index} src={assets.star_icon} alt=""/>
                    ))}
                </div>
                <p className="text-gray-600">{Testimonial.text}</p>
            </div>
         ))}
         </Slider>
      </div>
    </div>
    </div>
  )
}

export default Testimonials
