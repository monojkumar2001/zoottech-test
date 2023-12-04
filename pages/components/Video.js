import React from "react";

function Video() {
  return (
    <div className="video-area">
      <div className="container">
        <div
          className="video-view-content"
          data-aos="fade-up"
          data-aos-delay="80"
          data-aos-duration="800"
          data-aos-once="true"
        >
          <div className="video-image">
            <img src="/assets/images/video/video.jpg" alt="image" />
          </div>

          <a
            href="https://www.youtube.com/watch?v=w1rZV7kUgyw&t=114s"
            target="_blank"
            rel="noreferrer"
            className="video-btn popup-youtube"
          >
            <i className="ri-play-mini-fill"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
export default Video;
