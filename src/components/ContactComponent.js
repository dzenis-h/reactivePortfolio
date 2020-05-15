import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import formUrl from "../config/form-url"; // The endpoint

import Toggle from "../darkMode/ToggleContainer";
import { useTheme } from "../darkMode/useTheme";
import { Wrapper } from "../darkMode/Wrapper";

const Contact = () => {
  const initialState = {
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  };

  const [userInput, setUserInput] = useState(initialState);

  const themeState = useTheme();
  const darkMode = localStorage.getItem("dark");

  useEffect(() => {
    document.title = "Contact me"; // making the document title dynamic
  }, []);

  const handleChange = (e) => {
    // onChange handler
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  };

  const resetForm = () => {
    setUserInput({ ...initialState }); // Reset the form to the 'initialState'
  };

  const sendData = (e) => {
    e.preventDefault();
    axios // Make the request to the backend
      .post(formUrl, { formData: userInput }) // e.g. "http://localhost:5050/form-data"
      .then((res) => success()) // If we got the response, show the 'success' toast
      .catch((err) => failed()) // Catch any error and show he 'error' toast
      .finally(resetForm()); // Reset the form, errors, responseData
  };

  // My custom toast
  const success = () => {
    toast.warning(() => (
      <div className="myToast">
        <p>
          {" "}
          Thank you for reaching out{" "}
          <span role="img" aria-label="text">
            👍
          </span>
        </p>
        <span style={{ float: "right" }} role="img" aria-label="author">
          <b>-</b> Dzenis
        </span>
      </div>
    ));
  };

  const failed = () => {
    toast.error(() => (
      <div className="myToast">
        <p>
          {" "}
          Network error, please try again later{" "}
          <span role="img" aria-label="text">
            😥
          </span>
        </p>
      </div>
    ));
  };

  const { name, company, phone, email, message } = userInput;

  return (
    <Wrapper>
      <Toggle toggleTheme={themeState} theme={themeState.dark}></Toggle>
      <main id="contact">
        <h1 className="lg-heading textShadow">
          Contact
          <i className="text-secondary textShadow"> Me</i>
        </h1>

        <div className="contact-container">
          <div className="wrapper animated bounceInLeft">
            <div className="company-info">
              <h2
                className={
                  darkMode === "true"
                    ? "company-info-reverse lead"
                    : "lead textShadow"
                }
              >
                Additional info:
              </h2>
              <small className="text-secondary lead">
                For convenience, the contact info is clickable.
              </small>
              <ul className="contact-list">
                <li className="xo">
                  <a
                    href="https://www.linkedin.com/in/dzenis-h/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn link field"
                  >
                    <i className="fab fa-linkedin-in"></i>
                    Find me on LinkedIn
                  </a>
                </li>

                <li className="xo">
                  <a
                    href="mailto:dzenis.hankusic@gmail.com"
                    aria-label="Email field"
                  >
                    <i className="fas fa-at"></i>
                    Send me an Email
                  </a>
                </li>

                <li className="xo">
                  <a href="tel:00387603311015" aria-label="Phone number field">
                    <i className="fas fa-mobile-alt"></i>
                    Call my Phone
                  </a>
                </li>

                <li className="xo">
                  <a href="skype:dzenis.hankusic?call" aria-label="Skype field">
                    <i className="fab fa-skype"></i>
                    Call me via Skype
                  </a>
                </li>
              </ul>
            </div>

            {/* CONTACT FORM */}
            <div className="contact">
              <h1 className="contact-heading">Contact Form</h1>
              <p className="contact-plus">
                For any queries please contact me using this form or by other
                provided contact info.
              </p>

              <form id="contact-form" onSubmit={sendData}>
                <p>
                  <label>Name</label>
                  <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleChange}
                    required
                    placeholder="REQUIRED"
                    className={darkMode === "true" ? "reverse" : ""}
                  />
                </p>
                <p>
                  <label>Company</label>
                  <input
                    type="text"
                    name="company"
                    value={company}
                    onChange={handleChange}
                    placeholder="OPTIONAL"
                    className={darkMode === "true" ? "reverse" : ""}
                  />
                </p>
                <p>
                  <label>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    required
                    placeholder="REQUIRED"
                    className={darkMode === "true" ? "reverse" : ""}
                  />
                </p>
                <p>
                  <label>Phone Number</label>
                  <input
                    type="text"
                    name="phone"
                    value={phone}
                    onChange={handleChange}
                    placeholder="OPTIONAL"
                    className={darkMode === "true" ? "reverse" : ""}
                  />
                </p>
                <p className="full">
                  <label>Message</label>
                  <textarea
                    name="message"
                    rows="5"
                    value={message}
                    onChange={handleChange}
                    required
                    placeholder="REQUIRED"
                    className={darkMode === "true" ? "reverse" : ""}
                  ></textarea>
                </p>
                <p className="full">
                  <button type="submit">Submit</button>
                </p>
              </form>
            </div>
          </div>
          <ToastContainer autoClose={4000} closeOnClick />
        </div>
      </main>
    </Wrapper>
  );
};

export default Contact;
