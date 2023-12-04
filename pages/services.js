import React from "react";
import AppLayout from "../component/Layout/Layout";
import Chose from "./components/Chose";
import Contact from "./components/Contact";
import useSWR from "swr";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Head from "next/head";

const fetcher = async (...args) => {
  const res = await fetch(...args);
  const data = await res.json();
  return data;
};
function Service() {
  const baseuri = process.env.NEXT_PUBLIC_BACKEND_URL;
  const { data, error } = useSWR(`${baseuri}/api/services`, fetcher);
  if (error) {
    return <div>failed to load</div>;
  }
  if (!data) {
    return <div>loading...</div>;
  }
  return (
    <>
      {/* <!-- Start Page Banner Area --> */}
      <Head>
        <title> Service - Zoom Tech IT</title>
        <meta property="og:title" content="Service - Zoom Tech IT" />

        <link
          rel="canonical"
          href="https://www.zoomtechit.com/nft-website-development"
        />
        <meta
          name="description"
          content="Our web development company offers a variety of services including website design and development, e-commerce solutions, content management systems, mobile app development and related services. We strive to provide high-quality services to meet the specific needs of our clients."
        ></meta>
        <meta
          name="og:description"
          content="Our web development company offers a variety of services including website design and development, e-commerce solutions, content management systems, mobile app development and related services. We strive to provide high-quality services to meet the specific needs of our clients."
        ></meta>
        <meta
          name="keywords"
          content="Services, Web Development Company, Website Design, E-commerce, Content Management Systems, Mobile App Development"
        ></meta>
        <meta property="og:type" content="article" />
        <meta property="og:image" content="assets/img/meta/1.jpg" />
        <meta property="image" content="assets/img/meta/1.jpg" />
        <link rel="icon" type="image" href="/favicon.png"></link>
        <meta property="og:site_name" content="Zoom Tech IT"></meta>
        <meta property="og:type" content="website"></meta>
        <meta property="og:url" content="https://www.zoomtechit.com" />
      </Head>
      <div
        className="page-banner-area bg-2 jarallax"
        data-jarallax='{"speed": 0.3}'
      >
        <div className="container">
          <div
            className="page-banner-content"
            data-aos="fade-right"
            data-aos-delay="50"
            data-aos-duration="500"
            data-aos-once="true"
          >
            <h2>Our All Services</h2>

            <ul>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>Services</li>
            </ul>
          </div>
        </div>
      </div>
      {/* <!-- End Page Banner Area --> */}

      {/* <!-- Start Chose Area --> */}
      <Chose />
      {/* <!-- End Chose Area --> */}

      {/* <!-- Start Services Area --> */}
      <div className="services-area-style-two ptb-100">
        <div className="container-fluid">
          <div className="section-title">
            <span>SERVICES</span>
            <h2>
              We Provide the Best Quality <b>Services</b>{" "}
            </h2>
            <p>
              We are technology solutions providing company all over the world
              doing over 5 years.
            </p>
          </div>

          <div className="services-slides-two">
            <Swiper
              spaceBetween={40}
              loop={true}
              breakpoints={{
                // when window width is >= 640px
                640: {
                  width: 540,
                  slidesPerView: 1,
                },
                // when window width is >= 768px
                768: {
                  width: 768,
                  slidesPerView: 2,
                },
                1200: {
                  width: 1200,
                  slidesPerView: 3,
                },
              }}
            >
              {data.map((service) => (
                <SwiperSlide key={service.id}>
                  <div className="services-item">
                    <div className="services-image">
                      <Link href={service.slug}>
                        <a>
                          <img
                            src={service.url_image}
                            alt={service.meta_title}
                          />
                        </a>
                      </Link>
                    </div>
                    <div className="services-content">
                      <h3>
                        <Link href={service.slug}>
                          <a>{service.title}</a>
                        </Link>
                      </h3>
                      <p>{service.des}</p>
                      <Link href={service.slug}>
                        <a className="services-btn">View More</a>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <div className="services-shape-1">
          <img src="/assets/images/services/services-shape-1.png" alt="image" />
        </div>
        <div className="services-shape-2">
          <img src="/assets/images/services/services-shape-2.png" alt="image" />
        </div>
      </div>
      {/* <!-- End Services Area --> */}
      {/* <!-- Start Contact Area --> */}
      <Contact />
      {/* <!-- Start Contact Area --> */}
    </>
  );
}
Service.layout = AppLayout;
export default Service;
