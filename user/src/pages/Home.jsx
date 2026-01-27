import { ToastContainer } from "react-toastify";
import About from "../components/About";
import Banner from "../components/Banner";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Projects from "../components/Projects";
import Testimonials from "../components/Testimonials";

const Home = () => {
    return (
        <div className="w-full overflow-hidden">
            <ToastContainer/>
            <Header/>
            <About/>
            <Projects/>
            <Banner/>
            <Testimonials/>
            <Contact/>
            <Footer/>
    </div>
    )
} 

export default Home;