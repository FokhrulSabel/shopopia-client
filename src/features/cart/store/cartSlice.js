import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",

  initialState,

  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;

      const existing = state.items.find((i) => i.id === item.id);

      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({
          ...item,
          quantity: 1,
        });
      }

      state.totalQuantity += 1;

      state.totalPrice += item.price;
    },

    removeFromCart: (state, action) => {
      const id = action.payload;

      const existing = state.items.find((i) => i.id === id);

      if (!existing) return;

      state.totalQuantity -= existing.quantity;

      state.totalPrice -= existing.price * existing.quantity;

      state.items = state.items.filter((i) => i.id !== id);
    },

    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;

      const item = state.items.find((i) => i.id === id);

      if (!item) return;

      state.totalPrice -= item.price * item.quantity;

      item.quantity = quantity;

      state.totalPrice += item.price * quantity;
    },

    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
