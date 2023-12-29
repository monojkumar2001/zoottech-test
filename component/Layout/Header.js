import { useState, useEffect } from "react";
import Link from "next/link";
function Header() {
  const [sidebarActive, setSidebarActive] = useState(false);
  const _toggleSidebar = () => {
    setSidebarActive(!sidebarActive);
  };

  const [mobileMenu, setMobileMenu] = useState(false);
  const _mobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [active, setActive] = useState([1]);
  return (
    <>
      {/* <!-- Start Header Area --> */}
      <header className="main-header-area">
        {/* <!-- Start Navbar Area --> */}
        <div className={`${sticky ? "is-sticky" : ""} navbar-area `}>
          <div className="main-responsive-nav">
            <div className="container">
              <div className="main-responsive-menu">
                <div className="logo">
                  <Link href={"/"}>
                    <div>
                      <img src="/assets/images/logo.png" alt="image" />
                      <b>Zoom Tech It</b>
                    </div>
                  </Link>
                </div>
                <div className={`${mobileMenu ? "active" : ""} mobile-menu `}>
                  <div
                    className="navbar-collapse mean-menu"
                    id="navbarSupportedContent"
                  >
                    <ul className="navbar-nav ms-auto">
                      <li className="nav-item">
                        <Link href={"/"}>
                          <a className="nav-link active">Home</a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href={"/About"}>
                          <a className="nav-link">About</a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href={"/services"}>
                          <a className="nav-link">Services</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href={"/portfolio"}>
                          <a className="nav-link">Portfolio</a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href={"/blog"}>
                          <a className="nav-link">Blog</a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href={"/contactus"}>
                          <a className="nav-link">Contact</a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="main-navbar">
            <div className="container-fluid">
              <nav className="navbar navbar-expand-md navbar-light">
                <Link href={"/"}>
                  <div className="navbar-brand">
                    <a>
                      <img src="/assets/images/logo.png" alt="image" />
                    </a>
                    <span>Zoom Tech It</span>
                  </div>
                </Link>

                <div
                  className="collapse navbar-collapse mean-menu"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                      <Link href={"/"}>
                        <a
                          className={`${active == 1 ? "active" : ""} nav-link `}
                          onClick={() => {
                            if (active === 1) {
                              setActive();
                            } else {
                              setActive(1);
                            }
                          }}
                        >
                          Home
                        </a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link href={"/About"}>
                        <a
                          className={`${active == 2 ? "active" : ""} nav-link `}
                          onClick={() => {
                            if (active === 2) {
                              setActive();
                            } else {
                              setActive(2);
                            }
                          }}
                        >
                          About
                        </a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link href={"/services"}>
                        <a
                          className={`${active == 3 ? "active" : ""} nav-link `}
                          onClick={() => {
                            if (active === 3) {
                              setActive();
                            } else {
                              setActive(3);
                            }
                          }}
                        >
                          Services
                        </a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href={"/portfolio"}>
                        <a
                          className={`${active == 6 ? "active" : ""} nav-link `}
                          onClick={() => {
                            if (active === 6) {
                              setActive();
                            } else {
                              setActive(6);
                            }
                          }}
                        >
                          Portfolio
                        </a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link href={"/blog"}>
                        <a
                          className={`${active == 4 ? "active" : ""} nav-link `}
                          onClick={() => {
                            if (active === 4) {
                              setActive();
                            } else {
                              setActive(4);
                            }
                          }}
                        >
                          Blog
                        </a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link href={"/contactus"}>
                        <a
                          className={`${active == 5 ? "active" : ""} nav-link `}
                          onClick={() => {
                            if (active === 5) {
                              setActive();
                            } else {
                              setActive(5);
                            }
                          }}
                        >
                          Contact
                        </a>
                      </Link>
                    </li>
                  </ul>

                  <div className="others-options d-flex align-items-center">
                    <div className="option-item">
                      <div className="side-menu-btn" onClick={_toggleSidebar}>
                        <i
                          className="ri-bar-chart-horizontal-line"
                          data-bs-toggle="modal"
                          data-bs-target="#sidebarModal"
                        ></i>
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>

          <div className="others-option-for-responsive">
            <div className="container">
              <div className="dot-menu">
                <div className="inner" onClick={_toggleSidebar}>
                  <div className="circle circle-one"></div>
                  <div className="circle circle-two"></div>
                  <div className="circle circle-three"></div>
                </div>
                <div className="others-options d-flex align-items-center">
                  <div className="option-item">
                    <div className="side-menu-btn m-side" onClick={_mobileMenu}>
                      <i
                        className="ri-bar-chart-horizontal-line"
                        data-bs-toggle="modal"
                        data-bs-target="#sidebarModal"
                      ></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End Navbar Area --> */}
      </header>
      {/* <!-- End Header Area --> */}

      {/* <!-- Sidebar Modal --> */}
      <div
        className={`${sidebarActive ? "show d-block" : ""
          } sidebarModal modal right fade`}
        id="sidebarModal"
        tabIndex="-1"
        role="dialog"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <button
              type="button"
              onClick={_toggleSidebar}
              className="close"
              data-bs-dismiss="modal"
            >
              <i className="ri-close-line"></i>
            </button>

            <div className="modal-body">
              <a href="index.html">
                <image
                  src="/assets/images/black-logo.png"
                  className="black-logo"
                  alt="image"
                />
                <image
                  src="/assets/images/logo.png"
                  className="white-logo"
                  alt="image"
                />
              </a>
              <div className="sidebar-content">
                <h3>About Us</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>

                <div className="sidebar-btn">
                  <a href="contact.html" className="default-btn">
                    Let’s Talk
                  </a>
                </div>
              </div>
              <div className="sidebar-contact-info">
                <h3>Contact Information</h3>

                <ul className="info-list">
                  <li>
                    <i className="ri-phone-fill"></i>{" "}
                    <a href="tel:9901234567">+990-123-4567</a>
                  </li>

                  <li>
                    <i className="ri-mail-line"></i>{" "}
                    <a href="https://templates.envytheme.com/cdn-cgi/l/email-protection#1e7d71647b5e79737f7772307d7173">
                      <span
                        className="__cf_email__"
                        data-cfemail="6605091c0326010b070f0a4805090b"
                      >
                        [email&#160;protected]
                      </span>
                    </a>
                  </li>

                  <li>
                    <i className="ri-map-pin-line"></i> 413 North Las Vegas, NV
                    89032
                  </li>
                </ul>
              </div>
              <ul className="sidebar-social-list">
                <li>
                  <a href="#" target="_blank">
                    <i className="ri-facebook-fill"></i>
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <i className="ri-twitter-fill"></i>
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <i className="ri-linkedin-fill"></i>
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <i className="ri-instagram-fill"></i>
                  </a>
                </li>
              </ul>
              <div className="contact-form">
                <h3>Ready to Get Started?</h3>

                <form id="contactForm">
                  <div className="row">
                    <div className="col-lg-12 col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          required
                          data-error="Please enter your name"
                          placeholder="Your name"
                        />
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-6">
                      <div className="form-group">
                        <input
                          type="email"
                          name="email"
                          className="form-control"
                          required
                          data-error="Please enter your email"
                          placeholder="Your email address"
                        />
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <input
                          type="text"
                          name="phone_number"
                          className="form-control"
                          required
                          data-error="Please enter your phone number"
                          placeholder="Your phone number"
                        />
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <textarea
                          name="message"
                          className="form-control"
                          cols="30"
                          rows="6"
                          required
                          data-error="Please enter your message"
                          placeholder="Write your message..."
                        ></textarea>
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                      <button type="submit" className="default-btn">
                        Send Message<span></span>
                      </button>
                      <div
                        id="msgSubmit"
                        className="h3 text-center hidden"
                      ></div>
                      <div className="clearfix"></div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Sidebar Modal --> */}
    </>
  );
}
export default Header;
