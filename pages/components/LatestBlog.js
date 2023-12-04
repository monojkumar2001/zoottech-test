import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Link from "next/link";
//IMPORT POST DATA TO API
import useSWR from "swr";
const fetcher = async (...args) => {
  const res = await fetch(...args);
  const data = await res.json();
  return data;
};
function LatestBlog() {
  const baseuri = process.env.NEXT_PUBLIC_BACKEND_URL;

  const { data, error } = useSWR(`${baseuri}/api/topBlog`, fetcher);
  if (error) {
    return <h1 className="text-center">Failed to load Data </h1>;
  }
  if (!data) {
    return <div>loading...</div>;
  }

  return (
    <div>
      <div className="blog-area pt-100 pb-75">
        <div className="container">
          <div className="section-title">
            <span>ARTICLE</span>
            <h2>
              Read Our Blog To Get All Recent Tech <b>News</b>{" "}
            </h2>
          </div>

          <div className="blog-slides ">
            <Swiper
              spaceBetween={40}
              // autoplay={true}
              loop={true}
              breakpoints={{
                // when window width is >= 640px
                640: {
                  width: 640,
                  slidesPerView: 1,
                },
              }}
            >
              {data.map((post) => (
                <SwiperSlide key={post.id}>
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
                          <a href="single-blog-1.html">
                            <img src={post.url_image} alt={post.meta_title} />
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="blog-content">
                          <div className="date">{post.date}</div>
                          <h3>
                            <Link href={"/post/" + post.slug}>
                              {post.title}
                            </Link>
                          </h3>
                          <p
                            dangerouslySetInnerHTML={{
                              __html: post.meta_description.substring(0, 100),
                            }}
                          ></p>
                          <Link href={"/post/" + post.slug}>
                            <a className="blog-btn">View More</a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LatestBlog;
