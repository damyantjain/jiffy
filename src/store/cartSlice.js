import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartResInfo: {},
    items: []
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload.item);
      state.cartResInfo = action.payload.cartResInfo;
    },
    removeItem: (state, action) => {
      //state.items = state.items.filter(item => item.id != action.payload.id);
      state.items.pop();
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
  },
});


export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
