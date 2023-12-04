import React from "react";
import AppLayout from "../component/Layout/Layout";
import ContactInfo from "./components/ContactInfo";
import Link from "next/link";
import RecentPost from "./components/RecentPost";
import Head from "next/head";

function Privacy() {
  return (
    <div>
      <Head>
        <title>Privacy Policy - Zoom Tech IT</title>
        <meta property="og:title" content="Privacy Policy - Zoom Tech IT" />
        <link
          rel="canonical"
          href="https://www.zoomtechit.com/nft-website-development"
        />
        <meta
          name="description"
          content="Our web development company is committed to protecting the privacy of our clients. Read our privacy policy to learn more about the types of information we collect and how we protect it."
        ></meta>
        <meta
          name="og:description"
          content="Our web development company is committed to protecting the privacy of our clients. Read our privacy policy to learn more about the types of information we collect and how we protect it."
        ></meta>
        <meta
          name="keywords"
          content="Privacy Policy, Web Development Company, Personal Information, Data Security, Data Protection"
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
            <h2>Privacy Policy</h2>

            <ul>
              <li>
                <Link href={"/"}>
                  <a>Home</a>
                </Link>
              </li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
      </div>
      {/* <!-- End Page Banner Area --> */}

      {/* <!-- Start Privacy Policy Area --> */}
      <div className="privacy-policy-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="privacy-policy-content">
                <div className="privacy-policy-image">
                  <img src="/assets/images/privacy-policy.jpg" alt="image" />
                </div>

                <p>
                  <i>
                    This Privacy Policy was last updated on January 1, 2023.
                  </i>
                </p>
                <h3>
                  <span>1.</span> What Data We Get
                </h3>
                <blockquote className="blockquote">
                  <p>
                    Our web development company respects the privacy of our
                    clients and is committed to protecting their personal
                    information. This Privacy Policy outlines the types of
                    personal information we collect, how we use it, and the
                    steps we take to protect it.
                  </p>
                </blockquote>
                <h3>
                  <span>2.</span> Information we collect
                </h3>
                <p>
                  We may collect personal information from our clients when they
                  engage with our services, such as their name, contact
                  information, and billing information. We may also collect
                  information about their website or application, such as
                  website traffic data and usage statistics.
                </p>
                <h3>
                  <span>3.</span> Use of Information
                </h3>
                <p>
                  We use the personal information we collect to provide our
                  clients with the services they have requested, to communicate
                  with them about their account and the services we provide, and
                  to improve our services. We may also use the information to
                  send promotional materials or to inform clients about new
                  products or services that we believe they may be interested
                  in.
                </p>
                <h3>
                  <span>4.</span> Disclosure of Information
                </h3>
                <p>
                  We will not disclose personal information to any third party
                  without the client&apos;s prior written consent. We may
                  disclose personal information to our affiliates or service
                  providers who assist us in providing services to our clients,
                  but we will take reasonable steps to ensure that these parties
                  protect the confidentiality of the information.
                </p>
                <h3>
                  <span>5.</span> Data Security
                </h3>
                <p>
                  We take reasonable steps to protect the personal information
                  we collect from unauthorized access, use, or disclosure. We
                  use a variety of security technologies and procedures to help
                  protect personal information from unauthorized access, use, or
                  disclosure.
                </p>
                <h3>
                  <span>6.</span> Retention of Data
                </h3>
                <p>
                  We will retain personal information for as long as necessary
                  to fulfill the purposes for which it was collected, including
                  to meet legal, accounting, or reporting requirements.
                </p>

                <h3>
                  <span>7.</span> Access to Data
                </h3>
                <p>
                  Clients have the right to access their personal information,
                  request that we correct any inaccuracies, or request that
                  their personal information be deleted in certain
                  circumstances. To make a request, please contact us at{" "}
                  <Link href={"/contact"}>Contact</Link> .
                </p>

                <h3>
                  <span>8.</span> Changes to Privacy Policy
                </h3>
                <p>
                  Our web development company reserves the right to make changes
                  to this Privacy Policy at any time. Any changes will be
                  effective immediately upon posting to our website. Your
                  continued use of our services or website following the posting
                  of changes to this Privacy Policy will constitute your
                  acceptance of those changes.
                </p>

                <h3>
                  <span>9.</span> Contact Information
                </h3>
                <p>
                  If you have any questions or concerns about our Privacy
                  Policy, please contact us at{" "}
                  <Link href={"/contact"}>Contact</Link> .
                </p>

                <p>
                  By using our services and website, you acknowledge that you
                  have read, understood, and agree to be bound by this Privacy
                  Policy. Our web development company is committed to protecting
                  the privacy of our clients, and we will take all reasonable
                  steps to ensure that their personal information is protected.
                </p>
              </div>
            </div>

            <RecentPost />
          </div>
        </div>
      </div>
      {/* <!-- End Privacy Policy Area --> */}
      <ContactInfo />
    </div>
  );
}
Privacy.layout = AppLayout;
export default Privacy;
