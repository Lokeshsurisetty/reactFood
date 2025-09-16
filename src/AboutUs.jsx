import React from "react";
import "./AboutUs.css";

function AboutUs() {
  return (
    <div className="about-page">
      {/* ===== Hero Section ===== */}
      <section className="hero">
        <div className="hero-content">
          <h2>About Us</h2>
          <p>Home &gt; About Us</p>
          <button className="btn-primary">Sign In / Sign Up</button>
        </div>
      </section>

      {/* ===== Intro Section ===== */}
      <section className="intro">
        <div className="intro-container card">
          <div className="intro-text">
            <h3> Real Delicious Food <br /> Straight to your Table</h3>
             <p>
              Discover the ultimate food experience with our freshly prepared,
              hygienic, and tasty meals. Our mission is to bring happiness to your
              dining table every day. We focus on fast delivery and high-quality
              ingredients to make sure your cravings are satisfied.
              </p>
            <p>
              With our variety of cuisines, healthy food options, and top-class
              hygiene standards, we ensure every bite is a memory you’ll cherish.
              </p>
              <button className="btn-primary">Order Now</button>
          </div>
              <div className="intro-image">
                <img src="/images/Bowl.jpg" alt="Delicious food" />
              </div>
          </div>
        </section>

      {/* ===== Videos Section ===== */}
      <section className="videos">
        <div className="video-card card">
          <video src="/images/video1.mp4" controls muted loop />
        </div>
        <div className="video-card card">
          <video src="/images/video2.mp4" controls muted loop />
        </div>
      </section>

      {/* ===== Strength Section ===== */}
      <section className="strengths">
        <h3>Our Strength</h3>
        <div className="strength-cards">
          <div className="strength card">
            <h4>🍔 Fast Food</h4>
            <p>Quick bites and instant favorites, served hot & fresh.</p>
          </div>
          <div className="strength card">
            <h4>🥗 Healthy Foods</h4>
            <p>Nutritious meals made with fresh, organic ingredients.</p>
          </div>
          <div className="strength card">
            <h4>🧼 Hygienic Foods</h4>
            <p>Every dish is prepared under the highest hygiene standards.</p>
          </div>
        </div>
      </section>

      {/* ===== Contact Info ===== */}
      <section className="contact-info">
        <div className="contact-card card">
          <h4>📞 Call Us On</h4>
          <p>+1 345 677 8907</p>
        </div>
        <div className="contact-card card">
          <h4>⏰ Opening Hours</h4>
          <p>9:00 AM to 11:00 PM</p>
        </div>
        <div className="contact-card card">
          <h4>📧 Mail Us</h4>
          <p>foodheaven@gmail.com</p>
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer className="footer">
        <div className="footer-top">
          <h2>Food Heaven</h2>
          <p>326, Dukan Street New Orleans, England, 55666</p>
          <p>📞 +1 345 677 8907 | ✉ foodheaven@gmail.com</p>
        </div>
        <div className="footer-links">
          <div>
            <h4>Quick Links</h4>
            <ul>
              <li>About Us</li>
              <li>Food Menu</li>
              <li>Our Team</li>
              <li>Blog</li>
            </ul>
          </div>
          <div>
            <h4>Our Services</h4>
            <ul>
              <li>Fast Delivery</li>
              <li>Vegetarian Cuisine</li>
              <li>Skilled Chefs</li>
            </ul>
          </div>
          <div>
            <h4>Opening Hours</h4>
            <ul>
              <li>Saturday to Monday: 9:30 AM to 6:00 PM</li>
              <li>Tuesday: 10:30 AM to 5:30 PM</li>
              <li>Thursday: OFF</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default AboutUs;
