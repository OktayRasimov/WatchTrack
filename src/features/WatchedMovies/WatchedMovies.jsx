import { useSelector } from "react-redux";
import { BoxButton, StyledBox } from "../RenderedMovies/Box";
import styled from "styled-components";

const MovieInfoContainer = styled.div`
  margin-top: 3rem;
`;

function WatchedMovies() {
  const { Year, imdbRating, Title, Runtime, Plot, Director, Actors } =
    useSelector((state) => state.movie.selectedMovie);

  return (
    <StyledBox>
      <BoxButton>
        <p>+</p>
      </BoxButton>
      <MovieInfoContainer>TEST</MovieInfoContainer>
    </StyledBox>
  );
}

export default WatchedMovies;
