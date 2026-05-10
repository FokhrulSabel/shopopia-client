import { createSelector } from "@reduxjs/toolkit";

const authState = (state) => state.auth;

export const selectUser = createSelector([authState], (auth) => auth.user);

export const selectIsAuthenticated = createSelector(
  [authState],
  (auth) => auth.isAuthenticated,
);
