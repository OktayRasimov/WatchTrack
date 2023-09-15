import { useSelector } from "react-redux";

function NavBarFoundMovies() {
  const numMovies = useSelector((state) => state.movie.movieData);

  return <p>{numMovies.length} movies found</p>;
}

export default NavBarFoundMovies;
