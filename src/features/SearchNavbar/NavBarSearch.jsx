import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import { getMovies } from "../../services/useMovies";
import { useSelector, useDispatch } from "react-redux";
import { addMovies, addQuery, isMovieSearchLoading } from "./movieSlice";
import { useState } from "react";

const NavbarInput = styled.input`
  width: 15%;
  height: 40px;
  border-radius: 10px;
  padding: 0 1.4rem;
  outline: none;
  border: none;
  &:focus {
    border: 1px solid var(--color-grey-500);
  }
`;

function NavBarSearch() {
  const searchQuery = useSelector((state) => state.movie.query);

  const [searchMovie, setSearchMovie] = useState("");

  const dispatch = useDispatch();

  //React Queries movie data fetching
  const { data, isLoading } = useQuery({
    queryKey: ["getMovies", searchQuery],
    queryFn: () => getMovies(searchQuery),
  });

  dispatch(isMovieSearchLoading(isLoading));

  if (data?.Search) dispatch(addMovies(data.Search));

  function handleAddQuery() {
    dispatch(addQuery(searchMovie));
  }

  return (
    <>
      <NavbarInput
        placeholder="Search Movies..."
        onChange={(e) => setSearchMovie(e.target.value)}
      />
      <button onClick={handleAddQuery}>+</button>
    </>
    // <NavbarInput
    //   placeholder="Search Movies..."
    //   onChange={(e) => dispatch(addQuery(e.target.value))}
    // />
  );
}

export default NavBarSearch;
