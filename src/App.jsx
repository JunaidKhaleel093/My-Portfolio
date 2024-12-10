import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import FunFacts from './components/FunFacts';
import Experience from './components/Experience';
import ContactSection from './components/ContactSection'; 
import ScrollingTape from "./components/ScrollingTape";

function App() {
  return (
    <Router>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <ScrollingTape />
      <FunFacts />
      <ContactSection />
      <Footer />
    </Router>
  );
}

export default App;

