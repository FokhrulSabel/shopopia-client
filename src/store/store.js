import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "../features/cart/store/cartSlice";
import authReducer from "../features/auth/store/authSlice";
import wishlistReducer from "../features/wishlist/store/wishlistSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer,
    wishlist: wishlistReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),

  devTools: import.meta.env.DEV,
});
