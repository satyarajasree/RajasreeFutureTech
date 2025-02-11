import React from 'react'

const CallToAction = () => {
  return (
    <div>
        <section
        id="call-to-action"
        className="call-to-action section accent-background"
      >
        <div className="container">
          <div
            className="row justify-content-center"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <div className="col-xl-10">
              <div className="text-center">
                <h3>Join Rajasree Future Tech Today</h3>
                <p>
                  Step into the future with us. Together, we can revolutionize
                  technology and create solutions that redefine the boundaries
                  of possibility. Let’s innovate and achieve great milestones
                  together.
                </p>
                <a className="cta-btn" href="#contact">Get In Touch</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CallToAction