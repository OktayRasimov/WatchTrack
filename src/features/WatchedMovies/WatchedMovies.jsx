import { useSelector } from "react-redux";
import { BoxButton, StyledBox } from "../RenderedMovies/Box";

function WatchedMovies() {
  const selectedMovie = useSelector((state) => state.movie.selectedMovie);
  console.log(selectedMovie);
  return (
    <StyledBox>
      <BoxButton>
        <p>+</p>
      </BoxButton>
      <h1>TEST</h1>
    </StyledBox>
  );
}

export default WatchedMovies;
