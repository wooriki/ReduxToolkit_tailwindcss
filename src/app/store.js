import { configureStore } from "@reduxjs/toolkit";
import sliderReduer from "../features/slices/sliderSlice";
import productsReducer from "../features/slices/productsSlice";

export const store = configureStore({
  reducer: {
    slider: sliderReduer,
    products: productsReducer,
  },
});
