import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "../features/cart/store/cartSlice";
import authReducer from "../features/auth/store/authSlice";
import wishlistReducer from "../features/wishlist/store/wishlistSlice";
import { loadCart, saveCart } from "@/features/cart/utils/cartStorage";
import orderReducer from "@/features/checkout/store/orderSlice";

const preloadedState = {
  cart: loadCart() || undefined,
};

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer,
    wishlist: wishlistReducer,
    orders: orderReducer,

  },

  preloadedState,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),

  devTools: import.meta.env.DEV,
});
store.subscribe(() => {
  saveCart(store.getState().cart);
});
