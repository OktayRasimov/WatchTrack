import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import { getMovies } from "../../services/useMovies";
import { useSelector, useDispatch } from "react-redux";
import { addMovies, addQuery, isMovieSearchLoading } from "./movieSlice";
import { useState } from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";

const NavbarInput = styled.input`
  /* width: 100%; */
  height: 40px;
  border-radius: 10px;
  padding: 0 1.4rem;
  outline: none;
  border: none;
  transition: all 0.2s;
  &:focus {
    border: 1px solid var(--color-grey-500);
    transform: translateY(-3px);
  }
`;

const SearchQueryButton = styled.button`
  width: 40px;
  border: none;
  font-size: 2rem;
  border-radius: 50%;
  transition: all 0.2s;

  padding-top: 6px;
  &:hover {
    transform: scale(1.04);
  }
`;

const SearchQueryContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

function NavBarSearch() {
  const searchQuery = useSelector((state) => state.movie.query);

  const [searchMovie, setSearchMovie] = useState("");

  const dispatch = useDispatch();

  //React Queries movie data fetching
  const { data, isLoading, isError } = useQuery({
    queryKey: ["getMovies", searchQuery],
    queryFn: () => getMovies(searchQuery),
  });

  dispatch(isMovieSearchLoading(isLoading));

  if (data?.Search) dispatch(addMovies(data.Search));

  function handleAddQuery() {
    dispatch(addMovies([]));
    dispatch(addQuery(searchMovie));
  }

  return (
    <SearchQueryContainer>
      <NavbarInput
        placeholder="Search Movies..."
        onChange={(e) => setSearchMovie(e.target.value)}
      />
      <SearchQueryButton onClick={handleAddQuery}>
        <HiMagnifyingGlass />
      </SearchQueryButton>
    </SearchQueryContainer>
    // <NavbarInput
    //   placeholder="Search Movies..."
    //   onChange={(e) => dispatch(addQuery(e.target.value))}
    // />
  );
}

export default NavBarSearch;
