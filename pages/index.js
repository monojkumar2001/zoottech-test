import AppLayout from "../component/Layout/Layout";
import Head from "next/head";
import Link from "next/link";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Autoplay, Pagination } from "swiper";
import "swiper/css/pagination";

//import section
import AboutSection from "./components/AboutSection";
import Service from "./components/Service";
import Chose from "./components/Chose";
import Video from "./components/Video";
import Project from "./components/Project";
import Testimonial from "./components/Testimonial";
import LatestBlog from "./components/LatestBlog";
export default function Home() {
  return (
    <>
      <Head>
        <title>
          Zoom Tech IT - Professional Services for Website Design and
          Development
        </title>
        <meta
          property="og:title"
          content="Web Development Services  - Zoom Tech IT"
        />

        <link
          rel="canonical"
          href="https://www.zoomtechit.com/nft-website-development"
        />
        <meta
          name="description"
          content="Our web development company specializes in providing professional website design and development services, e-commerce solutions, mobile app development, and more. We help businesses and individuals achieve their online goals with high-quality and innovative solutions."
        ></meta>
        <meta
          name="og:description"
          content="Our web development company specializes in providing professional website design and development services, e-commerce solutions, mobile app development, and more. We help businesses and individuals achieve their online goals with high-quality and innovative solutions."
        ></meta>
        <meta
          name="keywords"
          content="Web Development Company, Website Design, Development, E-commerce, Mobile App Development, Professional Services, Online Goals, Business, Individuals."
        ></meta>
        <meta property="og:type" content="article" />
        <meta property="og:image" content="assets/img/meta/1.jpg" />
        <meta property="image" content="assets/img/meta/1.jpg" />
        <link rel="icon" type="image" href="/favicon.png"></link>
        <meta property="og:site_name" content="Zoom Tech IT"></meta>
        <meta property="og:type" content="website"></meta>
        <meta property="og:url" content="https://www.zoomtechit.com" />
      </Head>
      {/* <!-- Start Main Slides Area --> */}
      <div className="main-slides-area">
        <div className="home-slides">
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{
              delay: 2000,
              pauseOnMouseEnter: true,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            loop={true}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="main-slides-item">
                <div className="container-fluid">
                  <div className="row align-items-center">
                    <div className="col-lg-7 col-md-12">
                      <div className="main-slides-content">
                        <span
                          data-aos="fade-right"
                          data-aos-delay="70"
                          data-aos-duration="700"
                          data-aos-once="true"
                        >
                          Innovative solutions for modern business
                        </span>
                        <h1
                          data-aos="fade-right"
                          data-aos-delay="70"
                          data-aos-duration="700"
                          data-aos-once="true"
                        >
                          We Make The Best IT Solutions
                        </h1>
                        <p
                          data-aos="fade-right"
                          data-aos-delay="70"
                          data-aos-duration="700"
                          data-aos-once="true"
                        >
                          Looking for the best IT solutions? Look no further.
                          Zoom Tech IT offers top-quality service for all of
                          your IT needs. From Web Design, Web Development and
                          SEO, we have the expertise and experience to help your
                          business thrive. Contact us today to learn more.
                        </p>

                        <div
                          className="slides-btn"
                          data-aos="fade-right"
                          data-aos-delay="70"
                          data-aos-duration="700"
                          data-aos-once="true"
                        >
                          <Link href={"contactus"}>
                            <a className="default-btn">Get Started</a>
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div
                      className="col-lg-5 col-md-12"
                      data-aos="fade-down"
                      data-aos-delay="70"
                      data-aos-duration="700"
                      data-aos-once="true"
                    >
                      <div className="main-slides-image" data-tilt>
                        <img
                          src="./assets/images/home-slides/slides-1.png"
                          alt="image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="main-slides-item">
                <div className="container-fluid">
                  <div className="row align-items-center">
                    <div className="col-lg-7 col-md-12">
                      <div className="main-slides-content">
                        <span
                          data-aos="fade-right"
                          data-aos-delay="70"
                          data-aos-duration="700"
                          data-aos-once="true"
                        >
                          Experience the difference with our top-rated services
                        </span>
                        <h1
                          data-aos="fade-right"
                          data-aos-delay="70"
                          data-aos-duration="700"
                          data-aos-once="true"
                        >
                          Best IT Services For Your Business
                        </h1>
                        <p
                          data-aos="fade-right"
                          data-aos-delay="70"
                          data-aos-duration="700"
                          data-aos-once="true"
                        >
                          At Zoom Tech IT, we offer the best services in the
                          industry. Our team of experts is dedicated to
                          delivering exceptional results and helping our clients
                          succeed. Contact us for Web Design, Web Development,
                          and SEO. We are committed to quality and customer
                          satisfaction.
                        </p>

                        <div
                          className="slides-btn"
                          data-aos="fade-right"
                          data-aos-delay="70"
                          data-aos-duration="700"
                          data-aos-once="true"
                        >
                          <Link href={"contactus"}>
                            <a className="default-btn">Get Started</a>
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div
                      className="col-lg-5 col-md-12"
                      data-aos="fade-down"
                      data-aos-delay="70"
                      data-aos-duration="700"
                      data-aos-once="true"
                    >
                      <div className="main-slides-image" data-tilt>
                        <img
                          src="./assets/images/home-slides/slides-2.png"
                          alt="image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="main-slides-shape-1">
          <img
            src="./assets/images/home-slides/slides-shape-1.png"
            alt="image"
          />
        </div>
        <div className="main-slides-shape-2">
          <img
            src="./assets/images/home-slides/slides-shape-2.png"
            alt="image"
          />
        </div>
        <div className="main-slides-shape-3">
          <img
            src="./assets/images/home-slides/slides-shape-3.png"
            alt="image"
          />
        </div>
        <div className="main-slides-shape-4">
          <img
            src="./assets/images/home-slides/slides-shape-4.png"
            alt="image"
          />
        </div>
        <div className="main-slides-shape-5">
          <img
            src="./assets/images/home-slides/slides-shape-5.png"
            alt="image"
          />
        </div>
      </div>
      {/* <!-- End Main Slides Area --> */}

      {/* <!-- Start About Area --> */}
      <AboutSection />
      {/* <!-- End About Area --> */}
      {/* <!-- Start Services Area --> */}
      <Service />
      {/* <!-- Start Services Area end --> */}
      {/* <!-- Start Chose Area --> */}
      <Chose />
      {/* <!-- End Chose Area --> */}
      {/* start video section */}
      <Video />
      {/* end video section */}
      {/* project section start */}
      <Project />
      {/* project section end  */}
      {/* Testimonial section start */}
      <Testimonial />
      {/* Testimonial section end */}

      {/* Latest Blog post */}
      <LatestBlog />
      {/* Latest Blog post end */}
    </>
  );
}
Home.layout = AppLayout;
