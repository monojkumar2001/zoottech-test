import React from "react";
import AppLayout from "../component/Layout/Layout";
import ContactInfo from "./components/ContactInfo";
import Contact from "./components/Contact";
import Head from "next/head";
function Contactus() {
  return (
    <div>
      <Head>
        <title> Contact Us - Zoom Tech IT</title>
        <meta property="og:title" content="Contact Us - Zoom Tech IT" />

        <link
          rel="canonical"
          href="https://www.zoomtechit.com/nft-website-development"
        />
        <meta
          name="description"
          content="Contact our web development company for any questions or inquiries about our services, pricing, or to request a quote. Our team is available to assist you and answer any questions you may have."
        ></meta>
        <meta
          name="og:description"
          content="Contact our web development company for any questions or inquiries about our services, pricing, or to request a quote. Our team is available to assist you and answer any questions you may have."
        ></meta>
        <meta
          name="keywords"
          content="Contact Us, Web Development Company, Inquiry, Services, Pricing, Quote, Assistance, Support"
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
            <h2>Contact</h2>

            <ul>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </div>
      {/* <!-- End Page Banner Area --> */}
      <ContactInfo />
      {/* <!-- Start Talk Area --> */}
      <Contact />
      {/* <!-- End Talk Area --> */}
      {/* <!-- Start Map Area --> */}
      <div className="container ptb-100">
        <div className="map-location">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102948.35266648312!2d-115.15540073403864!3d36.26047650441708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8c2b00ad43d33%3A0x22c7fa13f5acf526!2sNorth%20Las%20Vegas%2C%20NV%2C%20USA!5e0!3m2!1sen!2sbd!4v1639919075838!5m2!1sen!2sbd"></iframe>
        </div>
      </div>
      {/* <!-- End Map Area --> */}
    </div>
  );
}
Contactus.layout = AppLayout;

export default Contactus;
