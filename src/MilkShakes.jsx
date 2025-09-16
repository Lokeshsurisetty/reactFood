import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "./store";
import "./MilkShakes.css";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

function MilkShakes() {
  const milkshakeItems = useSelector((state) => state.products.milkshakeProducts || []);
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = milkshakeItems.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(milkshakeItems.length / itemsPerPage);

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);
  const handleNext = () => currentPage < totalPages && setCurrentPage(currentPage + 1);
  const handlePrevious = () => currentPage > 1 && setCurrentPage(currentPage - 1);

  const milkshakeListItems = currentItems.map((product) => (
    <li key={product.id} className="card product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <h3>{product.name}</h3>
      <strong>₹{product.price}</strong>
      <p>{product.description}</p>
      <button className="add-btn" onClick={() => {handleAddToCart(product); toast.success(`product ${product.name} Added successfully`)}}>
        <span className="plus-icon">➕</span> Add to Cart
      </button>
    </li>
  ));

  return (
    <>
    <ToastContainer position = "top-right" autoClose = {2000} />
      <h1 style={{ color: "#ff6969", fontWeight: "bolder", marginTop: "20px", textAlign:"center" }}>
        MilkShakes 🥛
      </h1>

      <ul className="item milk-grid">{milkshakeListItems}</ul>

      <div className="pagination-container">
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className="pagination-btn"
        >
          ◀ Previous
        </button>

        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => handlePageChange(i + 1)}
            className={`pagination-btn ${currentPage === i + 1 ? "active" : ""}`}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className="pagination-btn"
        >
          Next ▶
        </button>
      </div>
    </>
  );
}

export default MilkShakes;
