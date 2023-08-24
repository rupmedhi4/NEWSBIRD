import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const fetchNews = createAsyncThunk('newsfetch', async()=>{
  const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=b994fa03b13a4d578a290a7e979b65a9');
  return response.json()
})

const NewsSlices = createSlice({
  name: "news",
  initialState : {
    isloading : false,
    data : null,
    error : false
  },
  extraReducers: (builder) =>{
    builder.addCase(fetchNews.fulfilled, (state, action)=>{
      state.isloading = false;
      state.data =action.payload
    });
    builder.addCase(fetchNews.pending,(state, action)=>{
      state.isloading = true
    });
    builder.addCase(fetchNews.rejected, (state, action)=>{
      state.error = true
      console.log(action.payload)
    })
  }
});



export const { showNews } = NewsSlices.actions;

export default NewsSlices.reducer;