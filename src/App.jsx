import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";
import FunFacts from "./components/FunFacts";
import ScrollingTape from "./components/ScrollingTape";
import CustomScrollbar from "./components/CustomScrollbar";
import ContactSection from "./components/ContactSection";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";

function App() {
  return (
    <CustomScrollbar>
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <ScrollingTape />
                <FunFacts />
                <ContactSection />
              </>
            }
          />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
        <Footer />
      </Router>
    </CustomScrollbar>
  );
}

export default App;
