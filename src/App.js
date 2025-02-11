import { useState, useEffect } from "react";
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
import MainScript from "./MainScript";
import Preloader from "./preloader/Preloader";

function App() {
  const [loading, setLoading] = useState(true);
  const [transition, setTransition] = useState(false);

  useEffect(() => {
    // Simulate a loading delay (e.g., fetching data)
    setTimeout(() => {
      setLoading(false); // Set loading to false after 3 seconds
      setTransition(true); // Trigger the transition
    }, 3000); // Adjust delay as needed
  }, []);


  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <div className={`main ${transition ? 'fade-in-active' : 'fade-in'}`}>
          
          <Base />
          <Carasoul />
          <main className="main">
            <FeatuedServices />
            <About />
            <Services />
            <CallToAction />
            <Team />
            <Contact />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
