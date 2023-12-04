import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
// Import Swiper styles
import "swiper/css";
import useSWR from "swr";
import { Autoplay, Pagination } from "swiper";
import "swiper/css/pagination";

const fetcher = async (...args) => {
  const res = await fetch(...args);
  const data = await res.json();
  return data;
};
function Project() {
  const baseuri = process.env.NEXT_PUBLIC_BACKEND_URL;

  const { data, error } = useSWR(`${baseuri}/api/portfolio`, fetcher);
  if (error) {
    return <h1>failed to load</h1>;
  }
  if (!data) {
    return <div>loading...</div>;
  }

  return (
    <>
      <div className="projects-area with-black-background pb-100">
        <div className="container-fluid">
          <div className="section-title">
            <span>PROJECTS</span>
            <h2>
              Our Latest <b>Incredible</b> Client&apos;s Projects{" "}
            </h2>
            <p>
              We are leading technology solutions providing company all over the
              world doing over 5 years.
            </p>
          </div>

          <div className="projects-slides">
            <Swiper
              spaceBetween={40}
              autoplay={{
                delay: 2000,
                pauseOnMouseEnter: true,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              loop={true}
              modules={[Autoplay, Pagination]}
              className="mySwiper"
              breakpoints={{
                // when window width is >= 640px
                640: {
                  width: 640,
                  slidesPerView: 1,
                },
                // when window width is >= 768px
                768: {
                  width: 768,
                  slidesPerView: 2,
                },
                992: {
                  width: 992,
                  slidesPerView: 3,
                },
                1200: {
                  width: 1200,
                  slidesPerView: 3.5,
                },
                1500: {
                  width: 1500,
                  slidesPerView: 4,
                },
              }}
            >
              {data.map((portfolio) => (
                <SwiperSlide key={portfolio.id}>
                  <div
                    className="projects-item"
                    data-aos="fade-up"
                    data-aos-delay="50"
                    data-aos-duration="500"
                    data-aos-once="true"
                  >
                    <div className="projects-image">
                      <a href={portfolio.url} target="_blank" rel="noreferrer">
                        <img src={portfolio.work_img} alt={portfolio.title} />
                      </a>
                    </div>
                    <div className="projects-content">
                      <h3>
                        <a
                          href={portfolio.url}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {portfolio.title}
                        </a>
                      </h3>

                      <a
                        href={portfolio.url}
                        target="_blank"
                        rel="noreferrer"
                        className="projects-btn"
                      >
                        View More
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <div className="projects-bg-shape-1">
          <img
            src="/assets/images/projects/projects-bg-shape.png"
            alt="image"
          />
        </div>
        <div className="projects-shape-1">
          <img src="/assets/images/projects/projects-shape-1.png" alt="image" />
        </div>
        <div className="projects-shape-2">
          <img src="/assets/images/projects/projects-shape-2.png" alt="image" />
        </div>
        <div className="projects-shape-3">
          <img src="/assets/images/projects/projects-shape-3.png" alt="image" />
        </div>
      </div>
    </>
  );
}
export default Project;
