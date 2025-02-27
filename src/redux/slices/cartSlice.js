import { createSlice } from "@reduxjs/toolkit";



const cartSlice = createSlice({
    name: "cart",
    initialState: {
      isLoading: false,
      error: false,
      products: [],
      isOpen: false, 
    },
    reducers: {
      AddToCart: (state, action) => {
        state.products = [...state.products, action.payload];
      },
      RemoveFromCart: (state, action) => {
        state.products = state.products.filter(
          (product) => product.id !== action.payload
        );
      },
      UpdateQuantity: (state, action) => {
        state.products = state.products.map((product) =>
          product.id === action.payload.productId
            ? { ...product, quantity: action.payload.newQuantity }
            : product
        );
      },
      ToggleCart: (state) => {
        state.isOpen = !state.isOpen; 
      },
    },
  });
  

  
export default cartSlice.reducer;
export const { AddToCart, RemoveFromCart, UpdateQuantity, ToggleCart } =cartSlice.actions;
