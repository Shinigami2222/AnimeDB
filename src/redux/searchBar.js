import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "searchBar",
  initialState: {
    animeList: [],
  },
  reducers: {
    setAnimeList: (state, action) => {
      state.animeList = action.payload.list.data;
    },
  },
});

export const { setAnimeList } = counterSlice.actions;

export default counterSlice.reducer;
