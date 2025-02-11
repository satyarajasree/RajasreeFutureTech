import React from "react";

const Services = () => {
  return (
    <div>
      <section id="services" className="services section light-background">
        <div className="container section-title" data-aos="fade-up">
          <span>Services</span>
          <h2>Our Services</h2>
          <p>
            At Rajasree FutureTech, we are committed to providing cutting-edge
            technology solutions that empower businesses and drive digital
            transformation. Our services are designed to meet the evolving needs
            of the tech industry and deliver tangible results.
          </p>
        </div>

        <div className="container">
          <div className="row gy-4">
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="service-item position-relative">
                <div className="icon">
                  <i className="bi bi-activity"></i>
                </div>
                <a href="service-details.html" className="stretched-link">
                  <h3>Custom Software Development</h3>
                </a>
                <p>
                  We create bespoke software solutions tailored to your business
                  needs. From web applications to enterprise-level solutions, we
                  deliver products that drive efficiency and growth.
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="service-item position-relative">
                <div className="icon">
                  <i className="bi bi-broadcast"></i>
                </div>
                <a href="service-details.html" className="stretched-link">
                  <h3>Cloud Solutions</h3>
                </a>
                <p>
                  Our cloud services help businesses scale seamlessly while
                  ensuring secure data management and cost optimization. We
                  provide private, public, and hybrid cloud solutions tailored
                  to your infrastructure.
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="service-item position-relative">
                <div className="icon">
                  <i className="bi bi-easel"></i>
                </div>
                <a href="service-details.html" className="stretched-link">
                  <h3>AI & Machine Learning</h3>
                </a>
                <p>
                  We integrate artificial intelligence and machine learning into
                  your business to unlock data-driven insights, automate
                  processes, and improve decision-making with predictive
                  analytics.
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="service-item position-relative">
                <div className="icon">
                  <i className="bi bi-bounding-box-circles"></i>
                </div>
                <a href="service-details.html" className="stretched-link">
                  <h3>Digital Transformation Consulting</h3>
                </a>
                <p>
                  We help businesses navigate the digital landscape by offering
                  expert consulting services. Our goal is to enable
                  organizations to embrace technology to improve operations and
                  enhance customer experiences.
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <div className="service-item position-relative">
                <div className="icon">
                  <i className="bi bi-calendar4-week"></i>
                </div>
                <a href="service-details.html" className="stretched-link">
                  <h3>Enterprise Solutions</h3>
                </a>
                <p>
                  We offer scalable, integrated enterprise solutions that
                  streamline business processes, enhance collaboration, and
                  improve operational efficiency across your organization.
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <div className="service-item position-relative">
                <div className="icon">
                  <i className="bi bi-chat-square-text"></i>
                </div>
                <a href="service-details.html" className="stretched-link">
                  <h3>IT Support & Maintenance</h3>
                </a>
                <p>
                  We offer ongoing IT support and maintenance services to ensure
                  your systems run smoothly. Our team is available 24/7 to
                  address any technical issues and provide timely solutions.
                </p>
                <a href="/" className="stretched-link"></a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
