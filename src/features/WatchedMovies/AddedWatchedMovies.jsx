import { useSelector } from "react-redux";

function AddedWatchedMovies({ eachMov }) {
  const { Title, Poster, Year } = eachMov;

  return <div>{Title}</div>;
}

export default AddedWatchedMovies;
