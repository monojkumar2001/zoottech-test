import React, { useState, useEffect } from "react";
import axios from "axios";
function Contact() {
  const [showPopup, setShowPopup] = useState(false);
  const [inputField, setInputField] = useState({
    name: "",
    email: "",
    message: "",
    subject: "",
  });

  const inputsHandler = (e) => {
    e.persist();
    setInputField({
      ...inputField,
      [e.target.name]: e.target.value,
    });
  };

  const allInfoSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", inputField.name);
    formData.append("email", inputField.email);
    formData.append("message", inputField.message);
    formData.append("subject", inputField.subject);

    const baseuri = process.env.NEXT_PUBLIC_BACKEND_URL;

    axios.post(`${baseuri}/api/contact`, formData).then((res) => {
      if (res.data.status === 200) {
        setShowPopup(true);
        setInputField({
          name: "",
          email: "",
          message: "",
          subject: "",
        });
      } else {
        alert(
          "Maybe You not fill all the required fields. Please check again and fill all the required fields (*)."
        );
      }
    });
  };

  const closePopup = () => {
    setShowPopup(false);
  };
  return (
    <>
      {/* <!-- Start Talk Area --> */}
      <div className="talk-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="talk-image" data-tilt>
                <img src="/assets/images/talk/talk-2.png" alt="image" />

                <div className="talk-circle">
                  <img src="/assets/images/talk/talk-circle.png" alt="image" />
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="talk-content margin-zero">
                <span>LET&apos;S TALK</span>
                <h3>We Would Like To Hear From You Any Question </h3>
                <p>
                  Let&apos;s talk about how our website can elevate your online
                  presence and drive business growth.
                </p>

                <form id="contactFormTwo" onSubmit={allInfoSubmit}>
                  <div className="row">
                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          name="name"
                          onChange={inputsHandler}
                          value={inputField.name}
                          className="form-control"
                          required
                          placeholder="Your name"
                        />
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          name="subject"
                          onChange={inputsHandler}
                          value={inputField.subject}
                          className="form-control"
                          required
                          placeholder="Your subject"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <input
                          type="email"
                          name="email"
                          onChange={inputsHandler}
                          value={inputField.email}
                          className="form-control"
                          required
                          placeholder="Your email address"
                        />
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <textarea
                          name="message"
                          className="form-control"
                          cols="30"
                          rows="6"
                          required
                          onChange={inputsHandler}
                          value={inputField.message}
                          placeholder="Write your message..."
                        ></textarea>
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                      <button type="submit" className="default-btn">
                        Send Message<span></span>
                      </button>
                      <div
                        id="msgSubmitTwo"
                        className="h3 text-center hidden"
                      ></div>
                      <div className="clearfix"></div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Talk Area --> */}

      <div className={showPopup ? "active popup" : "popup"}>
        <div className="popup-inner">
          <div className="popup-content">
            <div className="popup-close" onClick={closePopup}>
              <i className="ri-close-line"></i>
            </div>
            <div className="popup-image">
              <img src="/assets/images/message.png" alt="image" />
            </div>
            <div className="popup-text">
              <h3>Subscribe To Our Newsletter</h3>
              <p>
                Your message has been successfully sent! We&apos;ll be in touch
                shortly
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
