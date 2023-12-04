import React, { useEffect, useState } from "react";
import Link from "next/link";

function Footer() {
  const [backTop, setbackTop] = useState(false);
  useEffect(() => {
    const handleBacktop = () => {
      if (window.scrollY > 200) {
        setbackTop(true);
      } else {
        setbackTop(false);
      }
    };
    window.addEventListener("scroll", handleBacktop);
    return () => {
      window.removeEventListener("scroll", handleBacktop);
    };
  }, []);
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      {/* <!-- End Footer Area --> */}
      <footer className="footer-area with-black-background pt-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-3 col-md-6">
              <div
                className="single-footer-widget"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="500"
                data-aos-once="true"
              >
                <div className="widget-logo">
                  <a href="index.html">
                    <img src="/assets/images/logo.png" alt="image" />
                  </a>
                </div>
                <p>
                  We provide Web Development Services that can help you create
                  your dream website.
                </p>

                <ul className="widget-social">
                  <li>
                    <a
                      href="https://www.facebook.com/EnvyTheme"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="ri-facebook-fill"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/?lang=en"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <i className="ri-twitter-fill"></i>
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://www.youtube.com/"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <i className="ri-youtube-fill"></i>
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://vimeo.com/"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <i className="ri-vimeo-fill"></i>
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://www.instagram.com/"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <i className="ri-instagram-line"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div
                className="single-footer-widget ps-5"
                data-aos="fade-up"
                data-aos-delay="60"
                data-aos-duration="600"
                data-aos-once="true"
              >
                <h3>Links</h3>

                <ul className="quick-links">
                  <li>
                    <Link href={"/About"}>
                      <a>About Us</a>
                    </Link>
                  </li>
                  <li>
                    <Link href={"/service"}>
                      <a>Services</a>
                    </Link>
                  </li>
                  <li>
                    <Link href={"/portfolio"}>
                      <a>Portfolio</a>
                    </Link>
                  </li>
                  <li>
                    <Link href={"/blog"}>
                      <a>Blog</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div
                className="single-footer-widget ps-5"
                data-aos="fade-up"
                data-aos-delay="70"
                data-aos-duration="700"
                data-aos-once="true"
              >
                <h3>Pages</h3>

                <ul className="quick-links">
                  <li>
                    <Link href={"/contactus"}>
                      <a>Contact Us</a>
                    </Link>
                  </li>
                  <li>
                    <Link href={"/purchase-guide"}>
                      <a>Purchase Guide</a>
                    </Link>
                  </li>
                  <li>
                    <Link href={"/faq"}>
                      <a>FAQ</a>
                    </Link>
                  </li>
                  <li>
                    <Link href={"/terms-of-service"}>
                      <a>Terms of Service</a>
                    </Link>
                  </li>
                  <li>
                    <Link href={"/privacy-policy"}>
                      <a>Privacy Policy</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div
                className="single-footer-widget"
                data-aos="fade-up"
                data-aos-delay="80"
                data-aos-duration="800"
                data-aos-once="true"
              >
                <h3>Subscribe Newsletter</h3>

                <form className="newsletter-form" data-bs-toggle="validator">
                  <input
                    type="email"
                    className="input-newsletter"
                    placeholder="Enter your email"
                    name="EMAIL"
                    required
                    autoComplete="off"
                  />

                  <button type="submit" className="default-btn">
                    Subscribe
                  </button>
                  <div id="validator-newsletter" className="form-result"></div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright-area">
          <div className="container">
            <div className="copyright-area-content">
              <p>
                Copyright @ All Rights Reserved by{" "}
                <a
                  href="https://zoomtechit.com"
                  rel="noreferrer"
                  target="_blank"
                >
                  Zoom Tech IT
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="footer-shape-1">
          <img src="/assets/images/footer/footer-shape-1.png" alt="image" />
        </div>
        <div className="footer-shape-2">
          <img src="/assets/images/footer/footer-shape-2.png" alt="image" />
        </div>
        <div className="footer-shape-3">
          <img src="/assets/images/footer/footer-shape-3.png" alt="image" />
        </div>
      </footer>
      {/* <!-- End Footer Area -->   */}

      {/* <!-- Start Go Top Area --> */}
      <div
        className={`${backTop ? "active" : ""} go-top`}
        onClick={handleScrollTop}
      >
        <i className="ri-arrow-up-s-line"></i>
      </div>
      {/* <!-- End Go Top Area --> */}
    </>
  );
}
export default Footer;
