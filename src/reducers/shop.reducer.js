/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import { createAction, createSlice } from '@reduxjs/toolkit';

const actions = {
  buyItem: createAction('buyItem'),
  emptyCart: createAction('emptyCart'),
};

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
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(actions.buyItem, (state, action) => ({
        ...state,
        cart: [...state.cart, action.payload],
      }))
      .addCase(actions.emptyCart, (state) => ({
        ...state,
        cart: [],
      }))
      .addDefaultCase((state) => state);
  },
});

export const { buyItem, emptyCart } = actions;
export default shopSlice.reducer;
