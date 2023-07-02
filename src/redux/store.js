import { configureStore } from "@reduxjs/toolkit";
import { streamersReducer } from "./slices/streamersSlice";

export const store = configureStore({
  reducer: { streamers: streamersReducer },
});
