import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./features/SearchNavbar/movieSlice";

export const store = configureStore({
  reducer: {
    movie: movieReducer,
  },
});
