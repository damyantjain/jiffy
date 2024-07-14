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
      const index = state.items.findIndex((x) => x.id === action.payload);
      if(index !== -1) {
        state.items.splice(index, 1);
      }
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
  },
});


export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
