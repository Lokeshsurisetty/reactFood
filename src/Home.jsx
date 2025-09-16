import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.css";

function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  const categories = [
    { id: 1, name: "Veg", img: "/images/vegetables.jpg", link: "/veg" },
    { id: 2, name: "Non-Veg", img: "/images/nonveg.webp", link: "/nonveg" },
    { id: 3, name: "Milk Shakes", img: "/images/milkshake.jpg", link: "/milkshakes" },
    { id: 4, name: "Chocolate", img: "/images/chocolates.jpg", link: "/chocolates" },
    { id: 5, name: "Drinks", img: "/images/drinks.jpg", link: "/drinks" },
  ];

  return (
    <div className="home-page">
      {/* ===== HERO SECTION ===== */}
      <section className="hero">
        <video autoPlay muted loop className="hero-video">
          <source src="/images/video1.mp4" type="video/mp4" />
        </video>

        <div className="hero-content">
          <h1>
            Welcome To <br /> <span>Food Heaven....!!</span>
          </h1>
          <p>
            Fresh, tasty & delivered fast. From classic dishes to modern flavors —
            Food Heaven has it all!
          </p>
          <div className="hero-buttons">
            <Link to="/veg" className="btn-primary">Order Now</Link>
            <Link to="/contact" className="btn-secondary">Contact Us</Link>
          </div>
        </div>
      </section>

      {/* ===== CAROUSEL SECTION ===== */}
      <div className="carousel-container">
        <h2 className="carousel-title">🍴 Food Categories</h2>
        <Slider {...settings}>
          {categories.map((cat) => (
            <div key={cat.id} className="category-card">
              <Link to={cat.link} className="category-link">
                <div className="category-box">
                  <img src={cat.img} alt={cat.name} className="category-image" />
                  <h3>{cat.name}</h3>
                </div>
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Home;
