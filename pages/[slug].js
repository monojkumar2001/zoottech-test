import React from "react";
import AppLayout from "../component/Layout/Layout";
import Head from "next/head";
import axios from "../lib/axios";
import Link from "next/link";
import Contact from "./components/Contact";
import ContactInfo from "./components/ContactInfo";

export async function getServerSideProps({ params }) {
  try {
    const slug = params.slug;
    const response = await axios.get(
      `https://test.smartcardgenerator.net/api/services/${slug}`
    );
    const service = response.data;

    return {
      props: {
        service,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);

    return {
      props: {
        service: null, // or handle error as needed
      },
    };
  }
}

export default function ServiceDetails({ service }) {
  return (
    <>
      <Head>
        <title>{service.title}</title>
        <meta property="og:title" content={service.seo_title} />
        <meta name="description" content={service.seo_description}></meta>
        <meta name="og:description" content={service.seo_description}></meta>
        <meta property="og:type" content="article" />
        <meta property="og:image" content={service.main_image} />
        <meta property="image" content={service.main_image} />
        <meta name="keywords" content={service.seo_keywords}></meta>
        <link rel="icon" type="image" href="/favicon.png"></link>
      </Head>
      {/* <!-- Start Main Slides Area --> */}
      {/* <!-- Start Page Banner Area --> */}
      <div
        className="page-banner-area bg-4 jarallax"
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
            <h2>{service.title}</h2>

            <ul>
              <li>
                <Link href={"/"}>
                  <a>Home</a>
                </Link>
              </li>
              <li>Services Details</li>
            </ul>
          </div>
        </div>
      </div>
      {/* <!-- End Page Banner Area --> */}

      {/* <!-- Start Services Details Area --> */}
      <div className="services-details-area ptb-100">
        <div className="container">
          <div className="services-details-desc">
            <div className="article-services-image">
              <img src={service.url_image} alt={service.title} />
            </div>
            <div className="article-services-content">
              <h1>{service.title}</h1>
              <p>{service.des}</p>
              <div
                className="article-services-content-list"
                dangerouslySetInnerHTML={{ __html: service.long_des }}
              ></div>
            </div>
          </div>
        </div>

        <div className="services-details-shape">
          <img
            src="/assets/images/services-details/line-shape.png"
            alt="image"
          />
        </div>
      </div>
      {/* <!-- End Services Details Area --> */}

      <Contact />
      <ContactInfo />
    </>
  );
}

// export async function getStaticProps({ params }) {
//   const response = await axios.get(`/services/${params.slug}`);

//   return {
//     props: {
//       service: response.data,
//     },
//   };
// }

ServiceDetails.layout = AppLayout;
