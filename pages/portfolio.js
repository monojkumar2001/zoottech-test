import React from "react";
import AppLayout from "../component/Layout/Layout";
import Contact from "./components/Contact";
import ContactInfo from "./components/ContactInfo";
import useSWR from "swr";
import Head from "next/head";

const fetcher = async (...args) => {
  const res = await fetch(...args);
  const data = await res.json();
  return data;
};
function Portfolio() {
  const baseuri = process.env.NEXT_PUBLIC_BACKEND_URL;

  const { data, error } = useSWR(`${baseuri}/api/portfolio`, fetcher);
  if (error) {
    return <div>failed to load</div>;
  }
  if (!data) {
    return (
      <div className="justify-content-center">
        <h3>Loading Data...</h3>
      </div>
    );
  }

  return (
    <div>
      <Head>
        <title> Portfolio - Zoom Tech IT</title>
        <meta property="og:title" content="Portfolio  - Zoom Tech IT" />

        <link
          rel="canonical"
          href="https://www.zoomtechit.com/nft-website-development"
        />
        <meta
          name="description"
          content="View our portfolio to see a selection of our previous work and the quality of the websites, applications and digital products we have delivered to our clients. You can see the design, functionality and the industries we have worked with."
        ></meta>
        <meta
          name="og:description"
          content="View our portfolio to see a selection of our previous work and the quality of the websites, applications and digital products we have delivered to our clients. You can see the design, functionality and the industries we have worked with."
        ></meta>
        <meta
          name="keywords"
          content=" Portfolio, Web Development Company, Previous Work, Websites, Applications, Digital Products, Design, Functionality, Industries."
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
            <h2>Projects</h2>

            <ul>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>Projects</li>
            </ul>
          </div>
        </div>
      </div>
      {/* <!-- End Page Banner Area --> */}

      {/* <!-- Start Products Area --> */}
      <div className="products-area pt-100 pb-100">
        <div className="container">
          <div className="section-title">
            <span>PROJECTS</span>
            <h2>
              Our Latest <b>Incredible</b> Client&lsquo;s Projects
            </h2>
          </div>
          <div className="row justify-content-center">
            {data.map((portfolio) => (
              <div className="col-lg-3 col-sm-6 mb-4" key={portfolio.id}>
                <div className="single-products-card">
                  <div className="products-image">
                    <a href={portfolio.url} target="_blank" rel="noreferrer">
                      <img
                        src={
                          "https://test.smartcardgenerator.net/" +
                          portfolio.work_img
                        }
                        alt="image"
                      />
                    </a>

                    <div className="add-to-cart-btn">
                      <a
                        href={portfolio.url}
                        target="_blank"
                        rel="noreferrer"
                        className="default-btn"
                      >
                        View Product
                      </a>
                    </div>
                  </div>
                  <div className="products-content">
                    <h3>
                      <a href={portfolio.url} target="_blank" rel="noreferrer">
                        {portfolio.title}
                      </a>
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <!-- End Products Area --> */}
      {/* <!-- Start Contact Area --> */}
      <Contact />
      {/* <!-- End Contact Area --> */}
      {/* <!-- Start ContactInfo Area --> */}
      <ContactInfo />
      {/* <!-- End ContactInfo Area --> */}
    </div>
  );
}

Portfolio.layout = AppLayout;
export default Portfolio;
