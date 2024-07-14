import { configureStore } from "@reduxjs/toolkit";
import sliderReduer from "../features/slices/sliderSlice";
import productsReducer from "../features/slices/productsSlice";
import cartReducer from "../features/slices/cartSlice";

export const store = configureStore({
  reducer: {
    slider: sliderReduer,
    products: productsReducer,
    cart: cartReducer,
  },
});
