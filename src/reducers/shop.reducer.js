/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [
    {
      id: Math.random(),
      name: 'iPhone XR - 64gb',
      brand: 'Apple',
      price: 599,
    },
    {
      id: Math.random(),
      name: 'Macbook Pro',
      brand: 'Apple',
      price: 2129,
    },
    {
      id: Math.random(),
      name: 'Airpods Pro',
      brand: 'Apple',
      price: 279,
    },
  ],
  cart: [],
};

const shopSlice = createSlice({
  name: 'shop',
  initialState,
  reducers: {
    buyItem: (state, action) => ({
      ...state,
      cart: [...state.cart, action.payload],
    }),
    emptyCart: (state) => ({
      ...state,
      cart: [],
    }),
  },
});

export const { buyItem, emptyCart } = shopSlice.actions;
export default shopSlice.reducer;
