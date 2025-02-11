import React from "react";
import '../assets/css/main.css'; // Assuming you are saving the CSS in Carasoul.css or other CSS file
import image from '../assets/img/hero-img.png'

const Carasoul = () => {
  return (
    <div>
      <section id="hero" className="hero section">
        <div className="container">
          <div className="row gy-4">
            <div
              className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center"
              data-aos="fade-up"
            >
              <h1>Elegant and creative solutions</h1>
              <p>
                We are team of talented designers making websites with Bootstrap
              </p>
              <div className="d-flex">
                <a id="start-button" href="#about" className="btn-get-started">
                  Get Started
                </a>
                <a id="video"
                  href="https://www.youtube.com/watch?v=Y7f98aduVJ8"
                  className="glightbox btn-watch-video d-flex align-items-center"
                >
                  <i className="bi bi-play-circle"></i>
                  <span>Watch Video</span>
                </a>
              </div>
            </div>
            <div
              className="col-lg-6 order-1 order-lg-2 hero-img"
              data-aos="zoom-out"
              data-aos-delay="100"
            >
              <img
                src={image}
                className="img-fluid animated"
                alt="Hero Image"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Carasoul;
