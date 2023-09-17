import { useSelector } from "react-redux";
import { BoxButton, StyledBox } from "../RenderedMovies/Box";
import styled from "styled-components";

const MovieInfoContainer = styled.div`
  margin-top: 4rem;
  background-color: red;
`;

const WatchedMovieBox = styled.div`
  width: 42rem;
  max-width: 42rem;
  background-color: var(--color-background-300);
  border-radius: 0.9rem;
  overflow: auto;
  height: max(800px, 400px);
  position: relative;
  background-color: var(--color-grey-600);
`;

function WatchedMovies() {
  const { Year, imdbRating, Title, Runtime, Plot, Director, Actors } =
    useSelector((state) => state.movie.selectedMovie);

  return (
    <WatchedMovieBox>
      <BoxButton>
        <p>+</p>
      </BoxButton>
      <MovieInfoContainer>TEST</MovieInfoContainer>
    </WatchedMovieBox>
  );
}

export default WatchedMovies;
