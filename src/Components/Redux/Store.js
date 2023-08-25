import { configureStore } from "@reduxjs/toolkit";
import NewsSlices from "./Slices/NewsSlices";
import PaginationSlice from "./Slices/PaginationSlice";

export const store = configureStore({
  reducer: {
    NewsSlices,
    PaginationSlice
  },
});