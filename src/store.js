import { configureStore, createSlice } from "@reduxjs/toolkit";

// ================= Products Slice =================
// Only static product data, no need for localStorage persistence
const productSlice = createSlice({
  name: "products",
  initialState: {
    vegProducts: [
      { id: 1001, name: "Brinjal", price: 45, image: "/images/brinjal.webp", description: "Rich in antioxidants and fiber 🥗" },
      { id: 1002, name: "Tomato", price: 30, image: "/images/Tomato.webp", description: "Juicy and vitamin-packed 🍅" },
      { id: 1003, name: "Carrot", price: 40, image: "/images/Carrot.webp", description: "Sweet, crunchy, and good for eyes 🥕" },
      { id: 1004, name: "Cauliflower", price: 60, image: "/images/Cauliflower.webp", description: "Versatile and nutritious 🥦" },
      { id: 1005, name: "Broccoli", price: 20, image: "/images/Broccoli.webp", description: "Superfood packed with vitamins 🥦" },
      { id: 1006, name: "Cucumber", price: 60, image: "/images/Cucumber.webp", description: "Refreshing and hydrating 🥒" },
      { id: 1007, name: "Lady Fingers", price: 40, image: "/images/Ladyfingers.webp", description: "Soft and healthy okra 🌱" },
      { id: 1008, name: "Potato", price: 35, image: "/images/potato.webp", description: "Comfort food staple 🥔" },
    ],
    nonVegProducts: [
      { id: 2001, name: "Chicken Breast (Skinless)", price: 120, image: "/images/chicken.jpeg", description: "Tender, juicy protein-rich meat 🍗" },
      { id: 2002, name: "Mutton Chops", price: 250, image: "/images/mutton.jpg", description: "Flavorful and rich in taste 🥩" },
      { id: 2003, name: "River Pomfret Fish", price: 180, image: "/images/fish.jpg", description: "High protein and omega-3 🐟" },
      { id: 2004, name: "Indian Prawns", price: 300, image: "/images/prawns.jpg", description: "Fresh, succulent, and juicy 🍤" },
      { id: 2005, name: "Mud Crabs", price: 350, image: "/images/crabs.jpg", description: "Crunchy, fresh sea delicacy 🦀" },
      { id: 2006, name: "Chicken Lollipops", price: 220, image: "/images/Fresh chicken lollipop.jpg", description: "Fun, ready-to-fry snack 🍗" },
      { id: 2007, name: "Chicken Liver", price: 90, image: "/images/chicken liver.jpg", description: "Iron-rich and nutritious ❤️" },
      { id: 2008, name: "Sea Caviar", price: 1500, image: "/images/caviar.jpg", description: "Luxury delicacy from the sea 🐟✨" },
    ],
    milkshakeProducts: [
      { id: 3001, name: "Chocolate Milkshake", price: 50, image: "/images/chocolate milkshakee.avif", description: "Rich, creamy and tasty chocolate bliss! 🍫🥛" },
      { id: 3002, name: "Strawberry Classic", price: 45, image: "/images/strawberry milkshakee.avif", description: "Fresh, fruity strawberry delight 🍓" },
      { id: 3003, name: "Vanilla Lite", price: 40, image: "/images/vanilla milkshakee.avif", description: "Smooth and creamy classic 🍨" },
      { id: 3004, name: "Alphonso Mango", price: 55, image: "/images/mango milkshakee.avif", description: "Tropical mango magic 🥭✨" },
      { id: 3005, name: "Chocolate Oreo", price: 60, image: "/images/oreo milkshakee.avif", description: "Crunchy Oreo in creamy shake 🍪🍫" },
      { id: 3006, name: "Banana Bliss", price: 35, image: "/images/banana milkshakee.avif", description: "Naturally sweet & refreshing 🍌" },
      { id: 3007, name: "Butterscotch Crunch", price: 50, image: "/images/butterscotch milkshakee.avif", description: "Sweet caramel nutty delight 🍯" },
      { id: 3008, name: "Dry Fruit Shake", price: 65, image: "/images/dryfruit milkshakee.avif", description: "Nutritious blend of dry fruits 🌰" },
      { id: 3009, name: "Nutella Choco", price: 70, image: "/images/nutella milkshake.avif", description: "Chocolate hazelnut heaven 🍫🌰" },
      { id: 3010, name: "Ferrero Rocher Shake", price: 70, image: "/images/rocher milkshake.avif", description: "Luxurious ferrero nutty chocolate indulgence ✨" },
      { id: 3011, name: "Kitkat Waffy", price: 70, image: "/images/kitkat milkshake.avif", description: "Chocolate wafer blended to perfection 🍫" },
      { id: 3012, name: "Tutti Frutti", price: 70, image: "/images/tutti frutti milkshake.avif", description: "Colorful fruity fun in a sip 🍬🍓" },
      { id: 3013, name: "Blueberry Delight", price: 70, image: "/images/blueberry milkshake.avif", description: "Sweet, tasty and tart blueberry goodness 🫐" },
      { id: 3014, name: "Lotus Biscoff", price: 70, image: "/images/biscoff milkshake.avif", description: "Caramelized biscoff cookie & creamy heaven 🍪" },
      { id: 3015, name: "Kesar Badam", price: 70, image: "/images/kesar milkshake.avif", description: "Saffron and almond taste rich delight! 🌸🌰" },
    ],
    chocolatesProducts: [
      { id: 5001, name: "Dairy Milk", price: 40, image: "/images/dairymilk.webp", description: "Smooth, creamy classic 🍫" },
      { id: 5002, name: "5 Star", price: 20, image: "/images/5star.webp", description: "Chewy caramel chocolate bite 🍬" },
      { id: 5003, name: "Munch", price: 15, image: "/images/munch.jpg", description: "Crispy wafer chocolate snack 🍫" },
      { id: 5004, name: "KitKat", price: 30, image: "/images/kitkat.avif", description: "Break into crispy chocolate wafers 🍫" },
      { id: 5005, name: "Snickers", price: 35, image: "/images/snickers.jpg", description: "Nutty caramel chocolate bar 🥜🍫" },
      { id: 5006, name: "Bournville", price: 50, image: "/images/bournville.jpg", description: "Rich dark chocolate indulgence 🍫" },
      { id: 5007, name: "Perk", price: 10, image: "/images/perk.jpg", description: "Mini chocolate bars for quick joy 🍫" },
      { id: 5008, name: "Galaxy", price: 45, image: "/images/galaxy.jpg", description: "Silky smooth milk chocolate 🌌" },
    ],
    drinksProducts: [
      { id: 4001, name: "Coca-Cola", price: 30, image: "/images/coca cola.jpeg", description: "Classic fizz, endless refreshment 🥤✨" },
      { id: 4002, name: "Pepsi", price: 30, image: "/images/pepsii.jpeg", description: "Bold and fizzy energy boost 🥤⚡" },
      { id: 4003, name: "Cranberry Flippinade", price: 25, image: "/images/cranberry Flippinade.jpeg", description: "Sweet, tart & refreshing 🍒" },
      { id: 4004, name: "Coke Zero", price: 25, image: "/images/coca cola zero.jpeg", description: "Bold taste, zero sugar 🥤✨" },
      { id: 4005, name: "Mountain Dew", price: 35, image: "/images/mountain dew.jpeg", description: "Citrusy thrill, ultimate energy 🌊⚡" },
      { id: 4006, name: "Lemon Flippinade", price: 25, image: "/images/Lemon Flippinade.jpeg", description: "Zesty, tangy refreshment 🍋" },
      { id: 4007, name: "Mirinda", price: 25, image: "/images/mirinda.jpeg", description: "Tangy fizz fun in every sip 🍊✨" },
      { id: 4008, name: "Thums Up", price: 35, image: "/images/thumsup.jpeg", description: "Bold flavor, maximum refreshment 👍⚡" },
    ]
  },
  reducers: {}
});

// ================= Initial States from localStorage =================
const initialCart = JSON.parse(localStorage.getItem("cart")) || [];
const initialOrders = JSON.parse(localStorage.getItem("orders")) || [];
const initialAuth = JSON.parse(localStorage.getItem("auth")) || {
  users: [],
  currentUser: null,
  isAuthenticated: false
};

// ================= Cart Slice =================
const cartSlice = createSlice({
  name: "cart",
  initialState: initialCart,
  reducers: {
    addToCart: (state, action) => {
      const item = state.find(i => i.name === action.payload.name);
      if (item) item.quantity += 1;
      else state.push({ ...action.payload, quantity: 1 });
    },
    removeFromCart: (state, action) => {
      const index = state.findIndex(i => i.name === action.payload.name);
      if (index !== -1) state.splice(index, 1);
    },
    updateQuantity: (state, action) => {
      const item = state.find(i => i.name === action.payload.name);
      if (item) {
        item.quantity += action.payload.quantity;
        if (item.quantity <= 0) state.splice(state.indexOf(item), 1);
      }
    },
    clearCart: (state) => {
      state.splice(0, state.length);
    }
  }
});

// ================= Orders Slice =================
const orderSlice = createSlice({
  name: "orders",
  initialState: initialOrders,
  reducers: {
    addOrder: (state, action) => {
      state.push(action.payload);
    }
  }
});

// ================= Authentication Slice =================
const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuth,
  reducers: {
    registerUser: (state, action) => {
      state.users.push(action.payload);
    },
    loginUser: (state, action) => {
      const { username, password } = action.payload;
      const user = state.users.find(
        (user) => user.username === username && user.password === password
      );
      if (user) {
        state.currentUser = user;
        state.isAuthenticated = true;
      } else {
        state.currentUser = null;
        state.isAuthenticated = false;
      }
    },
    logoutUser: (state) => {
      state.currentUser = null;
      state.isAuthenticated = false;
    }
  }
});

// ================= Export Actions =================
export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export const { addOrder } = orderSlice.actions;
export const { registerUser, loginUser, logoutUser } = authSlice.actions;

// ================= Configure Store =================
export const store = configureStore({
  reducer: {
    products: productSlice.reducer,
    cart: cartSlice.reducer,
    orders: orderSlice.reducer,
    authentication: authSlice.reducer,
  }
});

// ================= Persist Redux State to localStorage =================
store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem("cart", JSON.stringify(state.cart));
  localStorage.setItem("orders", JSON.stringify(state.orders));
  localStorage.setItem("auth", JSON.stringify(state.authentication));
});

export default store;
