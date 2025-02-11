import React from "react";
import image from "../assets/img/about.png"

const About = () => {
  return (
    <div>
      <section id="about" class="about section">
        <div className="container section-title" data-aos="fade-up">
          <span>
            About Us
            <br />
          </span>
          <h2>About</h2>
          <p>Innovating Tomorrow, Today</p>
        </div>

        <div className="container">
          <div className="row gy-4">
            <div
              className="col-lg-6 position-relative align-self-start"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <img
                src={image}
                className="img-fluid"
                alt=""
              />
              <a href="/"
                className="glightbox pulsating-play-btn"
              ></a>
            </div>
            <div
              className="col-lg-6 content"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h3>Welcome to Rajasree Future Tech</h3>
              <p className="fst-italic">
                At Rajasree Future Tech, we are committed to shaping the future
                with innovative IT solutions that empower businesses and drive
                transformation.
              </p>
              <ul>
                <li>
                  <i className="bi bi-check2-all"></i>
                  <span>
                    We specialize in cutting-edge technology solutions that meet
                    diverse business needs.
                  </span>
                </li>
                <li>
                  <i className="bi bi-check2-all"></i>
                  <span>
                    Our team thrives on delivering tailor-made strategies for
                    digital growth and efficiency.
                  </span>
                </li>
                <li>
                  <i className="bi bi-check2-all"></i>
                  <span>
                    With a customer-centric approach, we ensure your success is
                    at the core of everything we do.
                  </span>
                </li>
              </ul>
              <p>
                From software development to IT consulting, Rajasree Future Tech
                is your partner in innovation. Join us in crafting a smarter,
                brighter future driven by technology and innovation. Together,
                we achieve success beyond boundaries.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
