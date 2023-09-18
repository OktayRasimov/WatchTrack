import { useSelector } from "react-redux";

function AddedWatchedMovies() {
  const addedWatchedMovies = useSelector(
    (state) => state.movie.watchedMovieData
  );
}

export default AddedWatchedMovies;
