import React ,{useEffect} from "react";
import "./App.css";
import "./index.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import Header from "./components/header/Header";
import ParticleBackground from "./components/background/ParticleBackground";
import About from "./components/about/AboutInfo";
import SplashCursor from "./components/home/SplashCursor";
import Footer from "./components/footer/footer";
import Projects from "./components/projects/projects";
import Contact from "./components/contact/contact";
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,   // animation duration
      once: false,      // false = animate every time (not just once)
      mirror: true,     // re-animate on scroll up
    });
  }, []);
  return (
    <div className="App">
      {/* <SplashCursor /> */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1 // Put it behind all content
      }}>
        <ParticleBackground
          particleColors={['#64ffda ', '#8892b0 ']}
          particleCount={500}
          particleSpread={10}
          speed={0.3}
          particleBaseSize={100}
          moveParticlesOnHover={false}
          alphaParticles={true}
          disableRotation={true}
          particleHoverFactor={5}
        />
      </div>
      <div className="AppContent">
        <Router>
          <Header />
          <Routes>
            <Route exact path="/" element={<HomePage />}></Route>
             <Route exact path="/projects" element={<Projects />}></Route>
            <Route exact path="/contact" element={<Contact />}></Route>
            <Route exact path="/about" element={<About />}></Route>
          </Routes>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
