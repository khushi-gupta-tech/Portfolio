import About from "./components/About";
import MainPage from "./components/MainPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="bg-black text-white font-[inter] ">
      <Navbar/>
      <MainPage/>
      <About/>
    </div>
  );
}

export default App;
