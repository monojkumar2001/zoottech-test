import React, { useState } from "react";
import AppLayout from "../component/Layout/Layout";
import Link from "next/link";

import ContactInfo from "./components/ContactInfo";
import Faq from "react-faq-component";
import Head from "next/head";
function FaqFunction() {
  const [rows, setRowsOption] = useState(null);
  const data = {
    rows: [
      {
        title: "What services does your web development company offer?",
        content: `We offer a wide range of web development services, including website design and development, e-commerce solutions, content management systems, and mobile app development.`,
      },
      {
        title: "How much does it cost to create a website?",
        content:
          "The cost of creating a website varies depending on the complexity and functionality of the site. Our prices start at $100 and can go up to $50000 or more for a custom-built website with advanced features.",
      },
      {
        title: "How long does it take to develop a website?",
        content: `The development time for a website can vary depending on the complexity of the project. A basic website can take around 4-6 days to develop, while a more complex website with advanced features can take up to 3-6 week. `,
      },
      {
        title:
          "Can you provide examples of websites you have developed in the past?",
        content: `Yes, we can provide a portfolio of websites we have developed in the past for you to review.`,
      },
      {
        title: "Do you offer ongoing maintenance and updates for websites?",
        content: `Yes, we offer ongoing maintenance and updates for websites as part of our web development services.`,
      },
      {
        title:
          "What is your process for working with clients to develop a website?",
        content: `Our process typically includes an initial consultation to understand the client's requirements, development of a detailed project plan, design and development of the website, testing, and launch.`,
      },
      {
        title: "Can you provide references or testimonials from past clients?",
        content: `Yes, we can provide references or testimonials from past clients upon request.`,
      },
    ],
  };
  return (
    <div>
      <Head>
        <title> FAQ - Zoom Tech IT</title>
        <meta property="og:title" content="FAQ - Zoom Tech IT" />

        <link
          rel="canonical"
          href="https://www.zoomtechit.com/nft-website-development"
        />
        <meta
          name="description"
          content=" Find answers to common questions about our web development company, our services, and the process of working with us. This FAQ page covers topics such as pricing, timeline, and examples of our work."
        ></meta>
        <meta
          name="og:description"
          content=" Find answers to common questions about our web development company, our services, and the process of working with us. This FAQ page covers topics such as pricing, timeline, and examples of our work."
        ></meta>
        <meta
          name="keywords"
          content="FAQ, Web Development Company, Services, Pricing, Timeline, Examples, Work, Questions, Answers"
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
            <h2>FAQ</h2>

            <ul>
              <li>
                <Link href={"/"}>
                  <a>Home</a>
                </Link>
              </li>
              <li>FAQ</li>
            </ul>
          </div>
        </div>
      </div>
      {/* <!-- End Page Banner Area --> */}

      {/* <!-- Start FAQ Area --> */}
      <div className="faq-area ptb-100">
        <div className="container">
          <div className="section-title">
            <span>FAQ</span>
            <h2>Frequently Ask Questions</h2>
          </div>

          <div className="faq-accordion">
            <div className="accordion" id="FaqAccordion">
              <div className="faq-style-wrapper">
                <Faq data={data} getRowOptions={setRowsOption} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- End FAQ Area --> */}

      <ContactInfo />
    </div>
  );
}

FaqFunction.layout = AppLayout;

export default FaqFunction;
