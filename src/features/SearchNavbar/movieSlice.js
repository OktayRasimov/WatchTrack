import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movieData: [],
  watchedMovieData: [],
  selectedMovie: [],
  isLoading: null,
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
    isMovieSearchLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { addMovies, addQuery, addSelectedMovie, isMovieSearchLoading } =
  movieSlice.actions;

export default movieSlice.reducer;
