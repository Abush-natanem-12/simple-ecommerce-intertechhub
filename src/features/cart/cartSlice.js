import { createSlice } from "@reduxjs/toolkit";

const CART_KEY = "cartProducts";
const cartStorage = JSON.parse(localStorage.getItem(CART_KEY)) || [];

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: cartStorage,
  },
  reducers: {
    addToCart: (state, action) => {
      const productId = action.payload;
      if (!state.cart.includes(productId)) {
        state.cart.push(productId);
        localStorage.setItem(CART_KEY, JSON.stringify(state.cart));
      }
    },
    removeFromCart: (state, action) => {
      const productId = action.payload;
      state.cart = state.cart.filter((id) => id !== productId);
      localStorage.setItem(CART_KEY, JSON.stringify(state.cart));
    },
    clearCart: (state) => {
      state.cart = [];
      localStorage.removeItem(CART_KEY);
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
