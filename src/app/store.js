import { configureStore } from "@reduxjs/toolkit";
import sliderReduer from "../features/slices/sliderSlice";

export const store = configureStore({
  reducer: {
    slider: sliderReduer,
  },
});
