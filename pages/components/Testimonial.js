import useSWR from "swr";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Autoplay, Pagination } from "swiper";
import "swiper/css/pagination";
const fetcher = async (...args) => {
  const res = await fetch(...args);
  const data = await res.json();
  return data;
};
function Testimonial() {
  const baseuri = process.env.NEXT_PUBLIC_BACKEND_URL;

  const { data, error } = useSWR(`${baseuri}/api/testimonials`, fetcher);
  if (error) {
    return <h1>failed to load</h1>;
  }
  if (!data) {
    return <div>loading...</div>;
  }

  return (
    <div>
      <div className="testimonials-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div
                className="testimonials-section-content"
                data-aos="fade-right"
                data-aos-delay="80"
                data-aos-duration="800"
                data-aos-once="true"
              >
                <span>TESTIMONIALS</span>
                <h3>
                  Some <b>Sweet Talk</b> Of Our Happy Clients
                </h3>
                <p>
                  Don&apos;t just take our word for it - see what our satisfied
                  clients have to say about our services:
                </p>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div
                className="testimonials-item"
                data-aos="fade-left"
                data-aos-delay="80"
                data-aos-duration="800"
                data-aos-once="true"
              >
                <Swiper
                  spaceBetween={0}
                  slidesPerView={1}
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
                >
                  {data.map((testimonial) => (
                    <SwiperSlide key={testimonial.id}>
                      <div className="item-box" data-tilt>
                        <img
                          src={
                            "https://test.smartcardgenerator.net/" +
                            testimonial.image
                          }
                          className="rounded-circle"
                          alt="image"
                        />
                        <p>{testimonial.message}</p>
                        <h4>
                          {testimonial.name} <span>{testimonial.area}</span>
                        </h4>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>

        <div className="testimonialsbg-shape">
          <img
            src="/assets/images/testimonials/testimonials-shape.png"
            alt="image"
          />
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
