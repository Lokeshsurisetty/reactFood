// Cart.jsx

// Import React and useState for component state management
import React, { useState } from "react";

// Import Redux hooks for accessing state and dispatching actions
import { useSelector, useDispatch } from "react-redux";

// Import actions from Redux store for updating cart
import { updateQuantity, removeFromCart, clearCart, addOrder } from "./store";

// Import utility functions to calculate totals and discounts
import { calculateButtonDiscount, calculateTotal, getcouponDiscount } from "./discountUtils";

// Import CSS styling for the Cart component
import "./Cart.css";

// Import EmailJS browser library for sending emails
import emailjs from "@emailjs/browser";

// Import 
import Swal from "sweetalert2";

// Import
import confetti from "canvas-confetti";
import QRCode from "react-qr-code";

function Cart() {
  // Get cart items from Redux store. Default to empty array if none
  const cartItems = useSelector((state) => state.cart || []);

  // Hook to send actions to Redux store
  const dispatch = useDispatch();

  // State to track discount button applied (percentage)
  const [discountPercentage, setDiscountPercentage] = useState(0);

  // State to track entered coupon code
  const [couponCode, setCouponCode] = useState("");

  // State to store result of coupon validation and discount
  const [couponResult, setCouponResult] = useState({
    isValid: false,
    discountPercentage: 0,
    discountAmount: 0
  });

  // State to store customer's email for order confirmation
  const [customerEmail, setCustomerEmail] = useState("");

  // Boolean to check if cart is empty
  const noItems = cartItems.length === 0;

  // Calculate subtotal of all items in cart
  const subtotal = calculateTotal(cartItems);

  // Calculate discount from discount buttons
  const { discount: buttonDiscount, finalPrice: priceAfterButtonDiscount } = calculateButtonDiscount(subtotal, discountPercentage);

  // Calculate final price including coupon discount
  const finalPriceWithCoupon = couponResult.isValid
    ? priceAfterButtonDiscount - couponResult.discountAmount
    : priceAfterButtonDiscount;

  // Increase quantity of a product in cart
  const handleIncrease = (product) =>
    dispatch(updateQuantity({ name: product.name, quantity: 1 }));

  // Decrease quantity of a product in cart
  const handleDecrease = (product) =>
    dispatch(updateQuantity({ name: product.name, quantity: -1 }));

  // Remove a product entirely from cart
  const handleRemove = (product) =>
    dispatch(removeFromCart({ name: product.name }));

  // Apply a discount from the discount buttons
  const handleApplyDiscount = (percentage) => setDiscountPercentage(percentage);

  // Apply a coupon code
  const handleApplyCoupon = () => setCouponResult(getcouponDiscount(couponCode, subtotal));

  //
  const[paymentMethod, setPaymentMethod] = useState('');

  // Checkout and send order confirmation email
  const handleCheckOut = () => {
    if (!customerEmail) {
      alert("Please enter your email address!");
      return;
    }

    // Prepare template parameters for EmailJS
    const templateParams = {
      order_id: new Date().getTime(),
      orders: cartItems.map((item) => ({
        name: item.name,
        price: (item.price * item.quantity).toFixed(2),
        units: item.quantity
      })),
      cost: {
        subtotal: subtotal.toFixed(2),
        discount: buttonDiscount.toFixed(2),
        coupon: couponResult.discountAmount.toFixed(2),
        shipping: 50,
        tax: 18.34,
        total: finalPriceWithCoupon.toFixed(2)
      },
      email: customerEmail
    };

    // Send email using EmailJS
    emailjs.send("service_5mqobgt", "template_ncpzbg3", templateParams, "w_K8e6JFDdHObE3bg")
      .then(() => alert("Email sent successfully!"))
      .catch((error) => alert("Email sending failed: " + error.text));
  };

  const handleCompletePurchase = () => {
    const order_id = new Date().getTime();  // generate unique order id

    //prepraring purchase details object
    const purchaseDetails = {
      date: new Date().toLocaleString(),
      items: [...cartItems],
      totalAmount: finalPriceWithCoupon,
    };
    
    dispatch(addOrder(purchaseDetails));
    dispatch(clearCart());
    notification(order_id);
    alert("🎉 Purchase completed! Order saved in history.");
  }

  // Render list of cart items
  const cartListItems = cartItems.map((product) => (
    <li key={product.id} className="card cart-card">
      <div className="cart-left">
        <img src={product.image} alt={product.name} />
        <div className="cart-info">
          <h4>{product.name}</h4>
          <div className="muted">₹{product.price.toFixed(2)} each</div>
        </div>
      </div>

      <div className="cart-right">
        {/* Quantity controls */}
        <div className="qty">
          <button className="btn-qty" onClick={() => handleDecrease(product)}> − </button>
          <span className="qty-num">{product.quantity}</span>
          <button className="btn-qty" onClick={() => handleIncrease(product)}> + </button>
        </div>

        {/* Line total for this product */}
        <div className="line-total">₹{(product.price * product.quantity).toFixed(2)}</div>

        {/* Remove product from cart */}
        <button className="btn-remove" onClick={() => handleRemove(product)}>Remove</button>
      </div>
    </li>
  ));

  let notification = (order_id) => {
    Swal.fire({
  icon: "success",
  title: "Order Placed",
  html: `<p>Your Order <b>${order_id}</b> has been placed successfully.</p>
  <p style="color: red">We'll send you a confirmation email shortly</p>`,
  showConfirmButton: true,
  confirmButtonText: "Track Order",
  confirmButtonColor: "#2563eb",
  showCancelButton: true,
  cancelButtonText: "Close",
  cancelButtonColor: "#ef4444",
  timer: 3000,
  timerProgressBar: true,
  didOpen: () => {
    confetti({
      particleCount: 500,
      spread: 120,
      origin: { y: 0.6 },
    });
  }
});
}

  return (
    <>
      <h1 className="page-title">Your Cart 🛒</h1>

      {noItems ? (
        <div className="empty-cart">
          <img src="/images/cart.png" alt="Empty Cart" />
          <h2 className="muted">Your cart is empty!</h2>
          <p>Looks like you haven’t added anything yet!</p>
          </div>
   ) : (
        <div className="cart-container">
          {/* LEFT: Cart Items */}
          <ul className="cart-list">{cartListItems}</ul>

          {/* RIGHT: Billing/Price Summary */}
          <div className="cart-summary card">
            {discountPercentage > 0 && <div className="discount-msg">🎉 Hurray! Discount applied! 🎉</div>}

            {/* Display subtotal and final price */}
            <div>Subtotal: <strong>₹{subtotal.toFixed(2)}</strong></div>
            {discountPercentage > 0 && <div>Discount ({discountPercentage}%): <strong>₹{buttonDiscount.toFixed(2)}</strong></div>}
            <div>Final Price: <strong>₹{finalPriceWithCoupon.toFixed(2)}</strong></div>

            {/* Discount buttons */}
            <div className="discount-buttons">
              <button onClick={() => {handleApplyDiscount(5); 
              confetti({particleCount:600,
                spread: 360,
                origin: { y: 0.6},
              })}}>Apply 5% Off</button>

              <button onClick={() => {handleApplyDiscount(10); 
              confetti({particleCount:600,
                spread: 360,
                origin: { y: 0.6},
              })}}>Apply 10% Off</button>

              <button onClick={() => {handleApplyDiscount(20); 
              confetti({particleCount:600,
                spread: 360,
                origin: { y: 0.6},
              })}}>Apply 20% Off</button>

              <button onClick={() => handleApplyDiscount(0)}>Remove Discount</button>
            </div>

            {/* Coupon code input */}
            <div className="coupon-section">
              <input
                type="text"
                placeholder="Enter coupon code"
                value={couponCode}
                onChange={(e) => {
                  setCouponCode(e.target.value);
                  if (e.target.value === "") setCouponResult({ isValid: false, discountPercentage: 0, discountAmount: 0 });
                }}
              />
              <button onClick={handleApplyCoupon}>Apply Coupon</button>
            </div>

            {/* Display coupon result */}
            {couponCode && (
              couponResult.isValid ? (
                <div>
                  <h3>🎉 Hurray! "{couponCode}" applied ✅</h3>
                  <h4>Discount: {couponResult.discountPercentage}%</h4>
                  <h3>Discount Amount: ₹{couponResult.discountAmount.toFixed(2)}</h3>
                </div>
              ) : (
                <h5 className="text-danger mt-2">Invalid coupon code</h5>
              )
            )}

            {/* Email input */}
            <label>Enter your Gmail to receive order confirmation:</label>
            <input
              type="email"
              value={customerEmail}
              onChange={(e) => setCustomerEmail(e.target.value)}
              placeholder="your@example.com"
            />

            {/* Checkout button */}
            <button onClick={handleCheckOut}>Checkout & Send Email</button>

            {/* payments */}
            <div>
              <h3> Select payment method </h3>
              <button onClick={() => setPaymentMethod('qr')}>
                QR code
              </button>
              <button onClick={() => setPaymentMethod('card')}>
                Card
              </button>
              
              {paymentMethod === 'qr' && (
                <div>
                  <h4>Scan UPI QR to pay ₹{finalPriceWithCoupon}</h4>
                  <QRCode 
                  value={`upi://pay?pa=8639881750@ibl&pn=ZestyMart&am=₹${finalPriceWithCoupon}&cu=INR`} />
                </div>
              )}
            </div>
            <button onClick={handleCompletePurchase}> Complete purchase </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Cart;