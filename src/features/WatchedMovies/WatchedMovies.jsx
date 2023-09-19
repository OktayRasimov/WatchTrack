import { BoxButton } from "../RenderedMovies/Box";
import styled from "styled-components";
import SelectedMovieBox from "./SelectedMovieBox";
import { useDispatch, useSelector } from "react-redux";
import { addIsShowing } from "../SearchNavbar/movieSlice";

const MovieInfoContainer = styled.div`
  margin-top: 4rem;
`;

const WatchedMovieBox = styled.div`
  width: 72rem;
  max-width: 72rem;
  background-color: var(--color-background-300);
  border-radius: 0.9rem;
  overflow: auto;
  height: max(800px, 400px);
  position: relative;
  background-color: var(--color-grey-600);
`;

const OpenShow = styled.h2`
  font-size: 2.6rem;
  margin-right: 1.6rem;
  color: var(--color-light-100);
`;

function WatchedMovies() {
  const dispatch = useDispatch();

  const { isShowing, selectedMovie } = useSelector((state) => state.movie);

  function handleCloseOpen() {
    dispatch(addIsShowing(!isShowing));
  }

  return (
    selectedMovie.Title && (
      <WatchedMovieBox>
        <BoxButton onClick={handleCloseOpen}>
          <OpenShow>{isShowing ? "-" : "+"}</OpenShow>
        </BoxButton>
        <MovieInfoContainer>
          <SelectedMovieBox />
        </MovieInfoContainer>
      </WatchedMovieBox>
    )
  );
}

export default WatchedMovies;
