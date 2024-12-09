import { createSlice } from "@reduxjs/toolkit";

const WISH_KEY = "wishProducts"; // Renamed for clarity
const wishStorage = JSON.parse(localStorage.getItem(WISH_KEY)) || [];

const wishSlice = createSlice({
  name: "wish",
  initialState: {
    wish: wishStorage, // Renamed from 'cart' to 'wish'
  },
  reducers: {
    addToWish: (state, action) => {
      const productId = action.payload;
      if (!state.wish.includes(productId)) {
        // Updated to use 'wish'
        state.wish.push(productId);
        localStorage.setItem(WISH_KEY, JSON.stringify(state.wish)); // Updated to use 'WISH_KEY'
      }
    },
    removeFromWish: (state, action) => {
      const productId = action.payload;
      state.wish = state.wish.filter((id) => id !== productId); // Updated to use 'wish'
      localStorage.setItem(WISH_KEY, JSON.stringify(state.wish)); // Updated to use 'WISH_KEY'
    },
    clearWish: (state) => {
      state.wish = []; // Updated to use 'wish'
      localStorage.removeItem(WISH_KEY); // Updated to use 'WISH_KEY'
    },
  },
});

export const { addToWish, removeFromWish, clearWish } = wishSlice.actions;
export default wishSlice.reducer;
