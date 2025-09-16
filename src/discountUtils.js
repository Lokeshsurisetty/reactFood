// Function to calculate subtotal from cart items using reduce
export function calculateTotal(cartItems) {
  return cartItems.reduce((total, item) => total + item.price * item.quantity, 0); // starts from 0
}

// Function to apply discount percentage on total price
export function calculateButtonDiscount(totalPrice, discountPercentage) {
  const discount = (totalPrice * discountPercentage) / 100;
  const finalPrice = totalPrice - discount;

  return {
    discount,    // discount amount
    finalPrice,  // price after discount
  };
}

// Function to validate coupon and calculate discount
export function getcouponDiscount(coupon, totalPrice) {
  let discountPercentage = 0;

  switch (coupon) {
    case "LOKESH10":
      discountPercentage = 10;
      break;
    case "LOKESH20":
      discountPercentage = 20;
      break;
    case "LOKESH30":
      discountPercentage = 30;
      break;
    default:
      discountPercentage = 0;
  }

  const discountAmount = (totalPrice * discountPercentage) / 100;

  return {
    isValid : discountPercentage > 0, // true if coupon applied
    discountPercentage,
    discountAmount,
  };
}
