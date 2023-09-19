import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movieData: [],
  watchedMovieData: [],
  selectedMovie: [],
  isLoading: null,
  isShowing: false,
  movieComment: "",
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
    addIsShowing: (state, action) => {
      state.isShowing = action.payload;
    },
    addWatchedMovies: (state, action) => {
      state.watchedMovieData = [...state.watchedMovieData, action.payload];
      // state.selectedMovie = [
      //   ...state.selectedMovie,
      //   { message: action.payload },
      // ];
    },
    removeAddedWatched: (state, action) => {
      state.watchedMovieData = state.watchedMovieData.filter(
        (eachMov) => eachMov.imdbID !== action.payload
      );
    },
    addMovieComent: (state, action) => {
      state.movieComment = action.payload;
    },
  },
});

export const {
  addMovies,
  addQuery,
  addSelectedMovie,
  isMovieSearchLoading,
  addIsShowing,
  addWatchedMovies,
  removeAddedWatched,
  addMovieComent,
} = movieSlice.actions;

export default movieSlice.reducer;
