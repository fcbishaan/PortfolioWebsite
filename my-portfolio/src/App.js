import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Language from "./components/Language";
import Projects from "./components/Projects";
import Skills from "./components/Skills";


function App() {
  return (
    <div className="">
      <Header/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Language/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
