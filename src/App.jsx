import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useSelector } from "react-redux";

import Home from "./Home";
import Veg from "./Veg";
import NonVeg from "./NonVeg";
import MilkShakes from "./MilkShakes";
import Chocolate from "./Chocolate";
import Drinks from "./Drinks";
import Cart from "./Cart";
import Orders from "./Orders";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import NotFound from "./NotFound";
import LoginCheck from "./LoginCheck";
import Signup from "./SignUp";

import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const cartItems = useSelector((state) => state.cart || []);
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <BrowserRouter>
      {/* ===== NAVBAR ===== */}
      <header className="app-header">
        <div className="nav-top">
          {/* Logo */}
          <div className="nav-logo">
            <Link to="/home">🍴 Food Heaven</Link>
          </div>

          {/* Search Bar */}
          <div className="nav-search">
            <input type="text" placeholder="🔍 Search for food, drinks..." />
          </div>

          {/* Right Section */}
          <div className="nav-right">
            <Link to="/cart" className="cart-link">
              🛒 <span className="cart-text">Cart</span>
              <span className="cart-count">{cartCount}</span>
            </Link>
            <Link to="/login" className="btn-login">Login</Link>
            <Link to="/" className="btn-signup">Sign Up</Link>
          </div>
        </div>

        {/* ===== Links Row ===== */}
        <nav className={`nav-menu ${menuOpen ? "open" : ""}`}>
          <ul>
            <li><Link to="/home">🏠Home</Link></li>
            <li><Link to="/veg">🥬Veg</Link></li>
            <li><Link to="/nonveg">🍗Non-Veg</Link></li>
            <li><Link to="/milkshakes">🥤Milk Shakes</Link></li>
            <li><Link to="/chocolates">🍫Chocolates</Link></li>
            <li><Link to="/drinks">🧃Drinks</Link></li>
            <li><Link to="/orders">Orders</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>

      {/* ===== ROUTES ===== */}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/veg" element={<Veg />} />
        <Route path="/nonveg" element={<NonVeg />} />
        <Route path="/milkshakes" element={<MilkShakes />} />
        <Route path="/chocolates" element={<Chocolate />} />
        <Route path="/drinks" element={<Drinks />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/login" element={<LoginCheck />} />
        <Route path="/" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
