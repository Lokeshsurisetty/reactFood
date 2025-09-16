import React from "react";
import { useSelector } from "react-redux";
import "./Orders.css"; // ✅ Import the CSS we created

function Orders() {
  const orders = useSelector((state) => state.orders);

  const finalOrderList = orders.map((purchase, index) => (
    <li key={index} className="order-card">
      <p><strong>Date:</strong> {purchase.date}</p>
      <p><strong>Total Amount:</strong> ₹{purchase.totalAmount.toFixed(2)}</p>

      <ul>
        {purchase.items.map((item, itemIndex) => (
          <li key={itemIndex}>
            {item.name} - ₹{item.price} × {item.quantity} = ₹
            {(item.price * item.quantity).toFixed(2)}
          </li>
        ))}
      </ul>
    </li>
  ));

  return (
    <div className="orders-page">
      <h1>Orders History 📦</h1>
      {orders.length === 0 ? (
        <p className="empty-msg">No Orders placed yet!</p>
      ) : (
        <ul className="orders-list">{finalOrderList}</ul>
      )}
    </div>
  );
}

export default Orders;
