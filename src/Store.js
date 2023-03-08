import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "./Slices/basketslice";

export const store = configureStore({
  reducer: { basket: basketReducer },
});
