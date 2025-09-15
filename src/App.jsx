import About from "./components/About";
import MainPage from "./components/MainPage";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
function App() {
  return (
    <div className="bg-black text-white font-[inter] ">
      <Navbar/>
      <MainPage/>
      <About/>
      <Skills/>
      <Projects/>
    </div>
  );
}

export default App;
