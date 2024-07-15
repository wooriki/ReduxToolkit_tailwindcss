import { createSlice } from "@reduxjs/toolkit";
import { storeData } from "../../assets/data/dummyData";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    filteredProducts:
      JSON.parse(sessionStorage.getItem("filteredData")) || storeData,
    singleProduct:
      JSON.parse(sessionStorage.getItem("oneProduct")) || storeData,
    error: false,
  },
  reducers: {
    filteredProducts(state, action) {
      const filter = storeData.filter(
        (product) => product.type === action.payload
      );
      state.filteredProducts = filter;
      state.error = false;
      sessionStorage.setItem("filteredData", JSON.stringify(filter));
    },
    singleProduct(state, action) {
      const oneProduct = storeData.filter(
        (product) => product.id === action.payload
      );
      state.singleProduct = oneProduct;
      sessionStorage.setItem("oneProduct", JSON.stringify(oneProduct));
    },
    filterGender(state, action) {
      const gender = state.filteredProducts.filter(
        (product) => product.gender === action.payload
      );
      state.filteredProducts = gender;
      if (gender.length > 0) {
        state.error = false;
        sessionStorage.setItem("filteredData", JSON.stringify(gender));
      } else {
        state.error = true;
        state.filteredProducts = [];
      }
    },
    sortByPrice(state, action) {
      const price = state.filteredProducts.sort((a, b) =>
        a.price > b.price ? -1 : 1
      );
      state.filteredProducts = price;
      if (price.length > 1) {
        state.error = false;
        sessionStorage.setItem("filteredData", JSON.stringify(price));
      } else {
        state.error = true;
        state.filteredProducts = [];
      }
    },
    filterByColor(state, action) {
      const color = state.filteredProducts.filter((product) =>
        product.color.includes(action.payload)
      );
      state.filteredProducts = color;
      if (color.length > 0) {
        state.error = false;
        sessionStorage.setItem("filteredData", JSON.stringify(color));
      } else {
        state.error = true;
        state.filteredProducts = [];
      }
    },
    filterBySize(state, action) {
      const size = state.filteredProducts.filter((product) =>
        product.size.includes(action.payload)
      );
      state.filteredProducts = size;
      if (size.length > 0) {
        state.error = false;
        sessionStorage.setItem("filteredData", JSON.stringify(size));
      } else {
        state.error = true;
        state.filteredProducts = [];
      }
    },
  },
});

export const {
  filteredProducts,
  singleProduct,
  sortByPrice,
  filterByColor,
  filterGender,
  filterBySize,
} = productsSlice.actions;
export default productsSlice.reducer;
