import { configureStore } from "@reduxjs/toolkit";

// NOTE: IMPORTING ALL SLICES HERE
import authReducer from "./features/auth/authSlice.js";
import categoryReducers from "./features/category/categorySlice.js";
import cartReducer from "./features/cart/cartSlice.js";
import wishReducer from "./features/wishlist/wishSlice.js";

const store = configureStore({
  reducer: {
    auth: authReducer,
    category: categoryReducers,
    cart: cartReducer,
    wish: wishReducer,
  },
});

export default store;
