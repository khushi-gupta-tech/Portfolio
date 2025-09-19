import About from "./components/About";
import MainPage from "./components/MainPage";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
import { useEffect ,useState} from "react";

function App() {
  const [isVisible,setIsVisible] = useState(false);

  const handleScroll = () => {
    if(window.scrollY> 200){
      setIsVisible(true) 
    } else{
      setIsVisible(false)
    } 
  }
  const handleClick = () => {
    window.scrollTo({top:0,behavior:"smooth"})
  }
  useEffect(() => {
      window.addEventListener("scroll",handleScroll)

      return () => {
        window.removeEventListener("scroll",handleScroll)
      }
  },[]);

  return (
    <div className="bg-black text-white font-[inter] ">
      <Toaster/>
      <Navbar/>
      <MainPage/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
      {isVisible && (
        <button className="fixed bottom-5 right-5 p-1 bg-red-500 rounded-xl" onClick={handleClick}>Top⬆️</button>
      )}
    </div>
  );
}

export default App;
