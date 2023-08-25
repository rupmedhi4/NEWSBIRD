import { createSlice } from "@reduxjs/toolkit";

const PaginationSlice = createSlice({
  name: "PaginationSlice",
  initialState: {
    currentPage: 0,
  },
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload; 
    },
  },
});

export const { setCurrentPage } = PaginationSlice.actions; 

export default PaginationSlice.reducer;
