import React from "react";

function ContactInfo() {
  return (
    <div>
      {/* <!-- Start Overview Area --> */}
      <div className="overview-area pt-100 pb-75">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-3 col-md-6">
              <div className="overview-card">
                <h3>Call Us</h3>
                <span>
                  <a href="tel:+8801744220807">+8801744220807</a>
                </span>

                <div className="overview-shape">
                  <img
                    src="/assets/images/overview/overview-shape.png"
                    alt="image"
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="overview-card">
                <h3>Email Us</h3>
                <span>
                  <a href="mailto:zoomtechit1@gmail.com">
                    <span className="__cf_email__">zoomtechit1@gmail.com</span>
                  </a>
                </span>

                <div className="overview-shape">
                  <img
                    src="/assets/images/overview/overview-shape.png"
                    alt="image"
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="overview-card">
                <h3>WhatsApp</h3>
                <span>
                  <a href="https://wa.me/01792892198">+8801792892198</a>
                </span>

                <div className="overview-shape">
                  <img
                    src="/assets/images/overview/overview-shape.png"
                    alt="image"
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="overview-card">
                <h3>Visit Us</h3>
                <span>413 North Las Vegas, NV 89032</span>

                <div className="overview-shape">
                  <img
                    src="/assets/images/overview/overview-shape.png"
                    alt="image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Overview Area --> */}
    </div>
  );
}

export default ContactInfo;
