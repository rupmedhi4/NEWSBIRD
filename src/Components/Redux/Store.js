import { configureStore } from "@reduxjs/toolkit";
import NewsSlices from "./Slices/NewsSlices";

export const store = configureStore({
  reducer: {
    NewsSlices
  },
});