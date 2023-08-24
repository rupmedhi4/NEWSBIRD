import { createSlice } from "@reduxjs/toolkit";

const NewsSlices = createSlice({
  name: "news",
  initialState: [],
  reducers: {
    showNews: (state, action) => {
      
    },
  },
});



export const { showNews } = NewsSlices.actions;

export default NewsSlices.reducer;