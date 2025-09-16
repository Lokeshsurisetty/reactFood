import React, { useRef } from "react";
import "./Contactus.css";

function Contactus() {
  // Ref for scroll down
  const mohan = useRef(null);
  const scrolldown = () => {
    mohan.current.scrollIntoView({ behavior: "smooth" });
  };

  // Refs for form fields
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const mobileRef = useRef(null);
  const messageRef = useRef(null);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation checks
    if (!nameRef.current.value) {
      nameRef.current.focus();
      nameRef.current.style.outline = "2px solid red";
      return;
    }
    if (!emailRef.current.value) {
      emailRef.current.focus();
      emailRef.current.style.outline = "2px solid red";
      return;
    }
    if (!mobileRef.current.value) {
      mobileRef.current.focus();
      mobileRef.current.style.outline = "2px solid red";
      return;
    }
    if (!messageRef.current.value) {
      messageRef.current.focus();
      messageRef.current.style.outline = "2px solid red";
      return;
    }

    // Reset outline if everything is filled
    nameRef.current.style.outline = "";
    emailRef.current.style.outline = "";
    mobileRef.current.style.outline = "";
    messageRef.current.style.outline = "";

    // You can add backend integration or email service here
    alert("✅ Message sent successfully!");
  };

  return (
    <>
      {/* Hero Section */}
      <div className="hero-section">
        <h1>
          Welcome to <span>FoodiePlace</span>
        </h1>
        <p>
          Discover amazing culinary experiences and connect with food lovers
          from around the world.
        </p>
        <button onClick={scrolldown}>Get in Touch</button>
      </div>

      {/* Background Image with Overlay */}
      <div className="image-container">
        <img src="/images/contactus.jpg" alt="Contact Us" />
        <div className="overlay"></div>
        <h2 className="image-text" ref={mohan}>
          Get in <span>Touch</span>
        </h2>
      </div>

      {/* Contact Section */}
      <div className="contact-section">
        {/* Contact Form */}
        <div className="contact-form">
          <h2>Send us a Message</h2>
          <p>Fill out the form below and we'll get back to you within 24 hours.</p>

          <form onSubmit={handleSubmit}>
            <label>Full Name</label>
            <input
              type="text"
              placeholder="Your full name"
              ref={nameRef}
              onChange={() => (nameRef.current.style.outline = "")}
            />

            <label>Email Address</label>
            <input
              type="email"
              placeholder="your.email@example.com"
              ref={emailRef}
              onChange={() => (emailRef.current.style.outline = "")}
            />

            <label>Phone Number</label>
            <input
              type="text"
              placeholder="(555) 123-4567"
              ref={mobileRef}
              onChange={() => (mobileRef.current.style.outline = "")}
            />

            <label>Message</label>
            <textarea
              placeholder="Tell us about your inquiry, special requests, or how we can help you..."
              ref={messageRef}
              onChange={() => (messageRef.current.style.outline = "")}
            ></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>

        {/* Contact Info Cards */}
        <div className="contact-info">
          <div className="info-card">
            <i className="bi bi-geo-alt-fill"></i>
            <h5>Visit Us</h5>
            <p>Kotturu, Srikakulam</p>
            <p>Andhra Pradesh, 532455</p>
          </div>

          <div className="info-card">
            <i className="bi bi-telephone-fill"></i>
            <h5>Call Us</h5>
            <p>+91 6305927818</p>
            <p>+1 (555) 123-FOOD</p>
          </div>

          <div className="info-card">
            <i className="bi bi-envelope-fill"></i>
            <h5>Email Us</h5>
            <p>hello@foodieplace.com</p>
            <p>kanapakalamohanrao@gmail.com</p>
          </div>

          <div className="info-card">
            <i className="bi bi-clock-fill"></i>
            <h5>Opening Hours</h5>
            <p>Mon - Thu: 11AM - 10PM</p>
            <p>Fri - Sun: 11AM - 11PM</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contactus;
