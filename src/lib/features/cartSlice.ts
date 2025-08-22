// src/app/redux/features/counterSlice.js
"use client";
import { IProduct } from "@/types/interface";
import { createSlice } from "@reduxjs/toolkit";

interface ICartState {
  cartProducts: IProduct[];
}

const initialState: ICartState = {
  cartProducts: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existingProduct = state.cartProducts.find(
        (item) => item.id === product.id
      );

      if (existingProduct) {
        existingProduct.quantity += 1;
        console.log("Product quantity updated:", existingProduct);
      } else {
        state.cartProducts.push({ ...product, quantity: 1 });
        console.log("New product added to cart:", { ...product, quantity: 1 });
      }
    },

    removeFromCart: (state, action) => {
      const productId = action.payload;
      state.cartProducts = state.cartProducts.filter(
        (item) => item.id !== productId
      );
    },

    updateQuantity: (state, action) => {
      const { productId, quantity } = action.payload;
      const product = state.cartProducts.find((item) => item.id === productId);
      if (product) {
        if (quantity <= 0) {
          state.cartProducts = state.cartProducts.filter(
            (item) => item.id !== productId
          );
        } else {
          product.quantity = quantity;
        }
      }
    },

    clearCart: (state) => {
      state.cartProducts = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart, updateQuantity, clearCart } =
  cartSlice.actions;
export const selectCart = (state: { cart: ICartState }) => state.cart;
export default cartSlice.reducer;
