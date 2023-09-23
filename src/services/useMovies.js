import { useDispatch } from "react-redux";
import { addSelectedMovie } from "../features/SearchNavbar/movieSlice";

const KEY = "5970a58f";

export async function getMovies(query) {
  const res = await fetch(`http://www.omdbapi.com/?s=${query}&apikey=${KEY}`);

  const data = await res.json();

  if (data.Error === "Movie not found!")
    throw new Error(`${data.Error} Try Again`);

  return data;
}

export async function getMoviesFullData(id) {
  const res = await fetch(`http://www.omdbapi.com/?i=${id}&apikey=${KEY}`);

  const data = await res.json();

  return data;
}
