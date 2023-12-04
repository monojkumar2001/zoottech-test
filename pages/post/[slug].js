import React from "react";
import AppLayout from "../../component/Layout/Layout";
import Head from "next/head";
import axios from "../../lib/axios";
import Link from "next/link";
import Contact from "../components/Contact";
import ContactInfo from "../components/ContactInfo";
import RecentPost from "../components/RecentPost";

export async function getStaticPaths() {
  const response = await axios.get("/post");

  return {
    fallback: false,
    paths: response.data.map((post) => ({
      params: { slug: post.slug.toString() },
    })),
  };
}

export async function getStaticProps({ params }) {
  const response = await axios.get(`/post/${params.slug}`);

  return {
    props: {
      post: response.data,
    },
  };
}

export default function postDetails({ post }) {
  return (
    <>
      <Head>
        <title>{post.meta_title}</title>
        <meta property="og:title" content={post.meta_title} />
        <meta name="description" content={post.meta_description}></meta>
        <meta name="og:description" content={post.meta_description}></meta>
        <meta property="og:type" content="article" />
        <meta property="og:image" content={post.image} />
        <link rel="canonical" href={post.outbound_link} />
        <meta property="image" content={post.image} />
        <meta name="keywords" content={post.meta_keyword}></meta>
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
            <h2>{post.title}</h2>

            <ul>
              <li>
                <Link href={"/"}>
                  <a>Home</a>
                </Link>
              </li>
              <li>posts Details</li>
            </ul>
          </div>
        </div>
      </div>
      {/* <!-- End Page Banner Area --> */}

      {/* <!-- Start Blog Details Area --> */}
      <div className="blog-details-area pt-100 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="blog-details-desc">
                <div className="article-image">
                  <img src={post.url_image} alt={post.meta_title} />
                </div>

                <div className="article-content">
                  <ul className="entry-list">
                    <li>
                      By <a>{post.author}</a>
                    </li>
                    <li>{post.date}</li>
                  </ul>
                  <h1>{post.title}</h1>
                  <div
                    className="description"
                    dangerouslySetInnerHTML={{
                      __html: post.description,
                    }}
                  ></div>
                </div>

                <div className="article-share">
                  <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6">
                      <div className="share-content">
                        <h4>Share The Article:</h4>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <ul className="share-social text-end">
                        <li>
                          <a href="https://www.facebook.com/EnvyTheme">
                            <i className="ri-facebook-fill"></i>
                          </a>
                        </li>
                        <li>
                          <a href="https://twitter.com/?lang=en">
                            <i className="ri-twitter-fill"></i>
                          </a>
                        </li>
                        <li>
                          <a href="https://www.youtube.com/">
                            <i className="ri-youtube-fill"></i>
                          </a>
                        </li>
                        <li>
                          <a href="https://vimeo.com/">
                            <i className="ri-vimeo-fill"></i>
                          </a>
                        </li>
                        <li>
                          <a href="https://www.instagram.com/">
                            <i className="ri-instagram-line"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <RecentPost />
          </div>
        </div>
      </div>
      {/* <!-- End Blog Details Area --> */}

      <Contact />
      <ContactInfo />
    </>
  );
}
postDetails.layout = AppLayout;
