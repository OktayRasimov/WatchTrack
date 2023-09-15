import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movieData: [],
  query: "",
};

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    addMovies: (state, action) => {
      state.movieData = action.payload;
    },
    addQuery: (state, action) => {
      state.query = action.payload;
    },
  },
});

export const { addMovies, addQuery } = movieSlice.actions;

export default movieSlice.reducer;
