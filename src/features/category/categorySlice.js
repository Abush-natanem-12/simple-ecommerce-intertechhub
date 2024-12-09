import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
  name: "auth",
  initialState: {
    category: "electronics",
  },
  reducers: {
    changeCategory: (state, action) => {
      state.category = action.payload;
    },
  },
});

export const { changeCategory } = categorySlice.actions;
export default categorySlice.reducer;
