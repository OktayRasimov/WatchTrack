import { useSelector } from "react-redux";
import styled from "styled-components";

const FoundMovies = styled.h1`
  font-size: 2.6rem;
  color: var(--color-grey-500);
`;

const FoundMoviesNum = styled.span`
  color: black;
  margin-right: 1rem;
`;

function NavBarFoundMovies() {
  const numMovies = useSelector((state) => state.movie.movieData);

  return (
    <FoundMovies>
      <FoundMoviesNum>{numMovies.length}</FoundMoviesNum>
      movies found
    </FoundMovies>
  );
}

export default NavBarFoundMovies;
