import { storage } from "@/lib/storage";
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  user: null,
  token: storage.getToken() || null,
  isAuthenticated: !!storage.getToken(),
  isLoading: false,
};

const authSlice = createSlice({
  name: "auth",

  initialState,

  reducers: {
    setCredentials: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = true;

      storage.setToken(action.payload.token);
    },

    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;

      storage.removeToken();
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;
