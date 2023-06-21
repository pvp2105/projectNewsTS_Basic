import { createSlice } from "@reduxjs/toolkit";

interface NewsState {
  news: any[];
  skip: number;
  hasMore: boolean;
  detailNews: any;
}

const initialState: NewsState = {
  news: [],
  skip: 0,
  hasMore: true,

  detailNews: {},
};

const NewsSlice = createSlice({
  name: "News",
  initialState,
  reducers: {
    myNews: (state, action) => {
      state.news = [...state.news, ...action.payload];
    },
    mySkip: (state, action) => {
      state.skip = state.skip + action.payload;
    },
    myHasMore: (state, action) => {
      state.hasMore = action.payload;
    },

    myDetailNews: (state, action) => {
      state.detailNews = action.payload;
    },
    reset:(state)=>{
      state.news= [];
      state.skip= 0;
      state.hasMore= true;
      state.detailNews= {};
    }
  },
});

export const { myNews, mySkip, myHasMore, myDetailNews,reset } = NewsSlice.actions;

export default NewsSlice.reducer;
