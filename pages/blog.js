import React from "react";
import Link from "next/link";
import AppLayout from "../component/Layout/Layout";
import ContactInfo from "./components/ContactInfo";
import useSWR from "swr";
import Head from "next/head";

const fetcher = async (...args) => {
  const res = await fetch(...args);
  const data = await res.json();
  return data;
};
function Blog() {
  const baseuri = process.env.NEXT_PUBLIC_BACKEND_URL;

  const { data, error } = useSWR(`${baseuri}/api/post`, fetcher);
  if (error) {
    return <div>failed to load</div>;
  }
  if (!data) {
    return <div>loading...</div>;
  }
  return (
    <div>
      <Head>
        <title> Blog - Zoom Tech IT</title>
        <meta property="og:title" content="Blog - Zoom Tech IT" />

        <link
          rel="canonical"
          href="https://www.zoomtechit.com/nft-website-development"
        />
        <meta
          name="description"
          content="Stay up-to-date with the latest trends, insights, and tips in the web development industry with our blog. Our team of experts share their knowledge on various topics related to website design, development, digital marketing, and more."
        ></meta>
        <meta
          name="og:description"
          content="Stay up-to-date with the latest trends, insights, and tips in the web development industry with our blog. Our team of experts share their knowledge on various topics related to website design, development, digital marketing, and more."
        ></meta>
        <meta
          name="keywords"
          content="Blog, Web Development Company, Website Design, Development, Digital Marketing, Industry Trends, Insights, Tips."
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
            <h2>Blog Style One</h2>

            <ul>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>Blog Style One</li>
            </ul>
          </div>
        </div>
      </div>
      {/* <!-- End Page Banner Area --> */}

      {/* <!-- Start Blog Area --> */}
      <div className="blog-area pt-100 pb-100">
        <div className="container">
          <div className="section-title">
            <span>ARTICLE</span>
            <h2>
              Read Our Blog To Get All Recent Tech <b>News</b>{" "}
            </h2>
          </div>

          <div className="row justify-content-center">
            {data.map((post) => (
              <div className="col-lg-6 col-md-12" key={post.id}>
                <div
                  className="blog-card"
                  data-aos="fade-up"
                  data-aos-delay="80"
                  data-aos-duration="800"
                  data-aos-once="true"
                >
                  <div className="row align-items-center">
                    <div className="col-lg-6">
                      <div className="blog-image">
                        <Link href={"/post/" + post.slug}>
                          <a>
                            <img src={post.url_image} alt={post.title} />
                          </a>
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="blog-content">
                        <div className="date">{post.date}</div>
                        <h3>
                          <Link href={"/post/" + post.slug}>
                            <a>{post.title}</a>
                          </Link>
                        </h3>
                        <p>{post.meta_description}</p>
                        <Link href={"/post/" + post.slug}>
                          <a className="blog-btn">View More</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="blog-shape-1">
          <img src="/assets/images/blog/blog-shape-1.png" alt="image" />
        </div>
      </div>
      {/* <!-- End Blog Area --> */}

      <ContactInfo />
    </div>
  );
}
Blog.layout = AppLayout;

export default Blog;
