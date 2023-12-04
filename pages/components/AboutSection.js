import React from "react";
import Link from "next/link";
function AboutSection() {
  return (
    <div>
      {/* <!-- Start About Area --> */}
      <div className="about-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="about-image" data-tilt>
                <img
                  src="/assets/images/about/about.png"
                  alt="image"
                  data-aos="fade-down"
                  data-aos-delay="80"
                  data-aos-duration="800"
                  data-aos-once="true"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div
                className="about-content"
                data-aos="fade-up"
                data-aos-delay="80"
                data-aos-duration="800"
                data-aos-once="true"
              >
                <span>WHO WE ARE</span>
                <h3>
                  We Are <b>All In One</b> IT Solution & Technology Company{" "}
                </h3>
                <p>
                  At Zoom Tech IT, we are a team of talented and experienced web
                  developers, designers, and project managers. We have a passion
                  for creating beautiful, functional websites and applications
                  that help our clients achieve their goals.
                </p>
                <p>
                  We are dedicated to staying up-to-date with the latest
                  technologies and best practices in web development, and we
                  always aim to exceed our clients &apos; expectations. Whether
                  you&apos; re a small business looking to establish an online
                  presence or a large corporation in need of a comprehensive
                  digital strategy, we have the skills and experience to help
                  you succeed
                </p>
                <p>
                  Thank you for considering Zoom Tech IT for your web
                  development needs. We look forward to the opportunity to work
                  with you.
                </p>
                <div className="about-btn">
                  <Link href={"About"}>
                    <a className="default-btn">Know More About Us</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-shape-1">
          <img src="/assets/images/about/about-shape.png" alt="image" />
        </div>
      </div>
      {/* <!-- End About Area --> */}
    </div>
  );
}

export default AboutSection;
