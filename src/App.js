import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import Base from "./components/Base";
import "bootstrap/dist/css/bootstrap.min.css";
import Carasoul from "./components/Carasoul";
import Footer from "./components/Footer";
import FeatuedServices from "./components/FeatuedServices";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import CallToAction from "./components/CallToAction";
import Team from "./components/Team";
import Preloader from "./preloader/Preloader";

function App() {
  const [loading, setLoading] = useState(true);
  const [transition, setTransition] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setTransition(true);
    }, 3000);
    
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: "ease-in-out", // Easing style
      once: false, // Whether animation should happen only once
    });
  }, []);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <div className={`main ${transition ? "fade-in-active" : "fade-in"}`}>
          <Base />
          <Carasoul />
          <main className="main">
            <div data-aos="fade-up">
              <FeatuedServices />
            </div>
            <div data-aos="fade-left">
              <About />
            </div>
            <div data-aos="fade-right">
              <Services />
            </div>
            <div data-aos="zoom-in">
              <CallToAction />
            </div>
            <div data-aos="flip-up">
              <Team />
            </div>
            <div data-aos="fade-up">
              <Contact />
            </div>
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
