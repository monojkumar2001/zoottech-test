import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import useSWR from "swr";
import "swiper/css";
import Link from "next/link";

const fetcher = async (...args) => {
  const res = await fetch(...args);
  const data = await res.json();
  return data;
};
function Service() {
  const baseuri = process.env.NEXT_PUBLIC_BACKEND_URL;

  const { data, error } = useSWR(`${baseuri}/api/services`, fetcher);
  if (error) {
    return <h1 className="text-center">Failed to load Data </h1>;
  }
  if (!data) {
    return <div>loading...</div>;
  }

  return (
    <div>
      <div className="services-area with-radius ptb-100">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-4 col-md-12">
              <div
                className="services-section-content"
                data-aos="fade-down"
                data-aos-delay="80"
                data-aos-duration="800"
                data-aos-once="true"
              >
                <span>SERVICES</span>
                <h3>
                  We Provide the Best Quality <b>Services</b>{" "}
                </h3>
                <p>
                  Looking for the best IT solutions? Look no further. Zoom Tech
                  IT offers top-quality service for all of your IT needs.
                </p>
                <div className="services-section-btn">
                  <Link href={"services"}>
                    <a className="default-btn">Explore All Services</a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-8 col-md-12">
              <div className="services-slides">
                <Swiper
                  spaceBetween={40}
                  loop={true}
                  autoplay={true}
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
                    1200: {
                      width: 1200,
                      slidesPerView: 2.9,
                    },
                  }}
                >
                  {data.map((service) => (
                    <SwiperSlide key={service.id}>
                      <div className="services-item">
                        <div className="services-image">
                          <Link href={service.slug}>
                            <a>
                              <img src={service.url_image} alt="image" />
                            </a>
                          </Link>
                        </div>
                        <div className="services-content">
                          <h3>
                            <Link href={service.slug}>
                              <a>{service.title}</a>
                            </Link>
                          </h3>
                          <p>{service.des}</p>
                          <Link href={service.slug}>
                            <a className="services-btn">View More</a>
                          </Link>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
