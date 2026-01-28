import { useEffect , useState} from "react";
import { assets, projectsData } from "../../assets/assets"
import { motion } from "motion/react"
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";

const Projects = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsToShow, setCardToShow] = useState(1);

    useEffect(()=>{
        const updatCardsToShow = ()=>{
            if(window.innerWidth >= 1024){
                setCardToShow(projectsData.length);
            }else{
                setCardToShow(1);
            };
        }
            updatCardsToShow();

            window.addEventListener('resize', updatCardsToShow);
            return ()=> window.addEventListener('resize', updatCardsToShow);
        
    }, [])

    const nextProject = ()=>{
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length)
    }
    const prevProject = ()=>{
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? projectsData.length -1 : prevIndex -1 ))
    }

  return (
    <motion.div 
        initial={{opacity:0, x:-200}}
        transition={{duration: 1}}
        whileInView={{opacity:1, x:0}}
        viewport={{once: true}}
        className="Container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden" id="Projects">
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">Best Services <span className="underline underline-offset-4 decoration-1 under font-light">For you</span></h1>
      <p className="text-center text-gray-500 mb-8 max-w-80 mx-auto">Modern crafting, Luxury Legacies-Explore Our Portfolio</p>
    
        <div className="justify-end items-center flex mb-8">
            <button onClick={prevProject} className="p-3 bg-[#E9DBCF] rounded mr-2" aria-label='Previous Project'>
             <ChevronLeft size={20}/>
            </button>
            <button onClick={nextProject} className="p-3 bg-[#E9DBCF] rounded mr-2" aria-label='Next Project'>
            <ChevronRight size={20}/>
            </button>
        </div>

        <div className="overflow-hidden">
            <div className="flex gap-8 transition-transform duration-500 ease-in-out"
            style={{transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)`}}
            >
                {projectsData.map((project, index)=>(
                    <div key={index} className="relative flex-shrink-0 w-full sm:w-1/4 hover:scale-110">
                        <img src={project.image} alt={project.title} className="w-full h-48 object-cover mb-12"/>
                        <div className="absolute left-0 right-0 bottom-5 flex justify-center">
                            <div className="inline-block pl-2 bg-white w-3/4 py-2 shadow-md hover:bg-yellow-50">
                                <h2 className="font-xl font-semibold text-gray-800">
                                    {project.title}
                                </h2>
                                <p className="text-gray-500 text-sm">
                                    {project.price} <span> </span> {project.description}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </motion.div>
  )
}

export default Projects
