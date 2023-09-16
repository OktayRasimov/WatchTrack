import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movieData: [],
  watchedMovieData: [],
  selectedMovie: [],
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
    addSelectedMovie: (state, action) => {
      state.selectedMovie = action.payload;
    },
  },
});

export const { addMovies, addQuery, addSelectedMovie } = movieSlice.actions;

export default movieSlice.reducer;
