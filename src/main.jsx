import React from "react";
import ReactDOM from "react-dom/client";


import { Provider } from "react-redux";
import QueryProvider from "./app/providers/QueryProvider";
import AppRoutes from "./routes/AppRoutes";
import { store } from "./store/store";
import "./index.css";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryProvider>
        <AppRoutes />
      </QueryProvider>
    </Provider>
  </React.StrictMode>,
);
