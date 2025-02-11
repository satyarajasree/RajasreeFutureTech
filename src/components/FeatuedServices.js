import React from "react";

const FeatuedServices = () => {
  return (
    <div>
      <section id="featured-services" className="featured-services section">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <span>Our Features</span>
            <h2>Why Choose Us</h2>
            <p>
              We are a startup passionate about delivering innovative IT
              solutions tailored to your needs.
            </p>
          </div>

          <div className="row gy-4">
            <div
              className="col-lg-4 d-flex"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="service-item position-relative">
                <div className="icon">
                  <i className="bi bi-code-slash icon"></i>
                </div>
                <h4>
                  <a href="/" className="stretched-link">
                    Cutting-Edge Technology
                  </a>
                </h4>
                <p>
                  We leverage the latest tools and frameworks to build scalable
                  and robust IT solutions for your business.
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 d-flex"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="service-item position-relative">
                <div className="icon">
                  <i className="bi bi-lightbulb icon"></i>
                </div>
                <h4>
                  <a href="/" className="stretched-link">
                    Innovative Solutions
                  </a>
                </h4>
                <p>
                  Our team thrives on creativity, delivering tailored and
                  forward-thinking solutions to address complex challenges.
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 d-flex"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="service-item position-relative">
                <div className="icon">
                  <i className="bi bi-people icon"></i>
                </div>
                <h4>
                  <a href="/" className="stretched-link">
                    Customer-Centric Approach
                  </a>
                </h4>
                <p>
                  We prioritize understanding your requirements to ensure every
                  solution adds real value to your business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeatuedServices;
