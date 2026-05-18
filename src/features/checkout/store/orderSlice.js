import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orders: [],
  currentOrder: null,
};

const orderSlice = createSlice({
  name: "orders",

  initialState,

  reducers: {
    createOrder: (state, action) => {
      const order = {
        id: Date.now(),

        ...action.payload,

        createdAt: new Date().toISOString(),
      };

      state.orders.push(order);

      state.currentOrder = order;
    },
  },
});

export const { createOrder } = orderSlice.actions;

export default orderSlice.reducer;
