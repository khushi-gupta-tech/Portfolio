import About from "./components/About";
import MainPage from "./components/MainPage";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="bg-black text-white font-[inter] ">
      <Navbar/>
      <MainPage/>
      <About/>
      <Skills/>
    </div>
  );
}

export default App;
