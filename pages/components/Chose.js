import React from "react";

function Chose() {
  return (
    <div>
      {/* <!-- Start Choose Area --> */}
      <div className="choose-area pt-100 pb-75">
        <div className="container">
          <div className="section-title">
            <span>WHY CHOOSE US</span>
            <h2>
              We Help You To <b>Increase</b> Your Sale Through Solutions{" "}
            </h2>
            <p>
              Trusted by clients for delivering high-quality work, on-time and
              within budget.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div
                className="single-choose-card"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="500"
                data-aos-once="true"
              >
                <div className="choose-image" data-tilt>
                  <a href="services-details.html">
                    <img src="/assets/images/choose/choose-1.png" alt="image" />
                  </a>
                </div>
                <div className="choose-content">
                  <h3>
                    <a href="services-details.html">Web Development</a>
                  </h3>
                  <p>
                    Looking for top-quality web development? I have the skills
                    and experience to bring your project to life. Contact me
                    today.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div
                className="single-choose-card"
                data-aos="fade-up"
                data-aos-delay="60"
                data-aos-duration="600"
                data-aos-once="true"
              >
                <div className="choose-image" data-tilt>
                  <a href="services-details.html">
                    <img src="/assets/images/choose/choose-2.png" alt="image" />
                  </a>
                </div>
                <div className="choose-content">
                  <h3>
                    <a href="services-details.html">Web Design</a>
                  </h3>
                  <p>
                    Looking for a stunning web design? With years of experience
                    and a proven track record, I am the perfect choice. Contact
                    me today.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div
                className="single-choose-card"
                data-aos="fade-up"
                data-aos-delay="70"
                data-aos-duration="700"
                data-aos-once="true"
              >
                <div className="choose-image" data-tilt>
                  <a href="services-details.html">
                    <img src="/assets/images/choose/choose-3.png" alt="image" />
                  </a>
                </div>
                <div className="choose-content">
                  <h3>
                    <a href="services-details.html">Graphic Design</a>
                  </h3>
                  <p>
                    Looking for top-quality graphic design? I have the skills
                    and experience to help your business stand out. Contact me
                    today.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div
                className="single-choose-card"
                data-aos="fade-up"
                data-aos-delay="80"
                data-aos-duration="800"
                data-aos-once="true"
              >
                <div className="choose-image" data-tilt>
                  <a href="services-details.html">
                    <img src="/assets/images/choose/choose-4.png" alt="image" />
                  </a>
                </div>
                <div className="choose-content">
                  <h3>
                    <a href="services-details.html">Search Optimization</a>
                  </h3>
                  <p>
                    Looking for top-quality SEO? Look no further. I have the
                    expertise and experience to help your business succeed.
                    Contact me today.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="choose-shape-1">
          <img src="/assets/images/choose/choose-shape.png" alt="image" />
        </div>
        <div className="choose-shape-2">
          <img src="/assets/images/choose/choose-shape-2.png" alt="image" />
        </div>
      </div>
      {/* <!-- End Choose Area --> */}
    </div>
  );
}

export default Chose;
