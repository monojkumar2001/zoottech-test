import React from "react";
import AppLayout from "../component/Layout/Layout";
import Head from "next/head";

import AboutSection from "./components/AboutSection";
import Chose from "./components/Chose";
import Video from "./components/Video";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";

function About() {
  return (
    <>
      <Head>
        <title> About Us - Zoom Tech IT</title>
        <meta property="og:title" content="About Us  - Zoom Tech IT" />

        <link
          rel="canonical"
          href="https://www.zoomtechit.com/nft-website-development"
        />
        <meta
          name="description"
          content="Learn more about our web development company, our team, our mission, and the services we offer. Our company is dedicated to providing high-quality web development services to businesses and individuals."
        ></meta>
        <meta
          name="og:description"
          content="Learn more about our web development company, our team, our mission, and the services we offer. Our company is dedicated to providing high-quality web development services to businesses and individuals."
        ></meta>
        <meta
          name="keywords"
          content="About Us, Web Development Company, Team, Mission, Services, Quality, Business, Individuals."
        ></meta>
        <meta property="og:type" content="article" />
        <meta property="og:image" content="assets/img/meta/1.jpg" />
        <meta property="image" content="assets/img/meta/1.jpg" />
        <link rel="icon" type="image" href="/favicon.png"></link>
        <meta property="og:site_name" content="Zoom Tech IT"></meta>
        <meta property="og:type" content="website"></meta>
        <meta property="og:url" content="https://www.zoomtechit.com" />
      </Head>
      {/* <!-- Start Page Banner Area --> */}
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
            <h2>About</h2>

            <ul>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>About Us</li>
            </ul>
          </div>
        </div>
      </div>
      {/* <!-- End Page Banner Area --> */}

      {/* <!-- Start About Area --> */}
      <AboutSection />
      {/* <!-- End About Area --> */}
      {/* <!-- Start Chose Area --> */}
      <Chose />
      {/* <!-- End Chose Area --> */}
      {/* <!-- Start Video Area --> */}
      <Video />
      {/* <!-- End Video Area --> */}
      {/* <!-- Start Testimonial Area --> */}
      <div className="pt-5">
        <Testimonial />
      </div>
      {/* <!-- End Testimonial Area --> */}
      {/* <!-- Start Contact Area --> */}
      <Contact />
      {/* <!-- End Contact Area --> */}
    </>
  );
}

About.layout = AppLayout;

export default About;
