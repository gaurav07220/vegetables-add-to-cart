import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ProductProvider } from "./components/context/ProductContext";
import { CartProvider } from "./components/context/CartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // passing app component inside all provider so it will be accessble from anywhere
  <ProductProvider>
   <CartProvider>
   <App />
   </CartProvider>
  </ProductProvider>
);
