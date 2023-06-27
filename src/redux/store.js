import { configureStore } from "@reduxjs/toolkit";
import searchBarReducer from "./searchBar";

export default configureStore({
  reducer: {
    searchBar: searchBarReducer,
  },
});
