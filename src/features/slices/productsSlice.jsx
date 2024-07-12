import { createSlice } from "@reduxjs/toolkit";
import { storeData } from "../../assets/data/dummyData";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    filterdProducts:
      JSON.parse(sessionStorage.getItem("filteredData")) || storeData,
  },
  reducers: {
    filterdProducts(state, action) {
      try {
        const filter = storeData.filter(
          (product) => product.type === action.payload
        );
        state.filterdProducts = filter;
        console.log("filter", filter);
        const saveState = JSON.stringify(filter);
        sessionStorage.setItem("filterdDate", saveState);
      } catch (error) {
        return error;
      }
    },
  },
});

export const { filterdProducts } = productsSlice.actions;
export default productsSlice.reducer;
