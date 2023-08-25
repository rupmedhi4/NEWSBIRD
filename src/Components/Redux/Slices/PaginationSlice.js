import { createSlice } from "@reduxjs/toolkit";

const PaginationSlice = createSlice({
  name: "PaginationSlice",
  initialState: {
    currentPage: 0,
    category : "General"
  },
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload; 
    },
    setCategory: (state, action) => {
      state.category = action.payload; 
    },
  },
});

export const { setCurrentPage,setCategory } = PaginationSlice.actions; 

export default PaginationSlice.reducer;
