import { useSelector } from "react-redux";
import styled from "styled-components";

const FoundMovies = styled.h1`
  font-size: 2.6rem;
  color: var(--color-grey-500);
  @media (width<=750px) {
    font-size: medium;
  }
`;

const FoundMoviesNum = styled.span`
  color: black;
  margin-right: 1rem;
`;

function NavBarFoundMovies() {
  const numMovies = useSelector((state) => state.movie.watchedMovieData);

  return !numMovies.length ? (
    <FoundMovies>No Added Movies</FoundMovies>
  ) : (
    <FoundMovies>
      <FoundMoviesNum>{numMovies.length}</FoundMoviesNum>
      {numMovies.length === 1 ? "Movie" : "Movies"} Watched
    </FoundMovies>
  );
}

export default NavBarFoundMovies;
