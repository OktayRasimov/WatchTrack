import { useSelector } from "react-redux";
import styled from "styled-components";
import MovieDetailed from "./MovieDetailed";
import Loader from "../../ui/Loader";
import StartSearching from "../../ui/StartSearching";

export const StyledBox = styled.div`
  width: 45%;
  max-width: 45%;
  background-color: var(--color-background-300);
  border-radius: 0.9rem;
  overflow: auto;
  height: max(800px, 400px);
  position: relative;
  background-color: var(--color-grey-600);
`;

export const BoxButton = styled.button`
  position: absolute;
  top: 0.8rem;
  right: 0.8rem;
  height: 2.4rem;
  aspect-ratio: 1;
  border-radius: 50%;
  border: none;
  background-color: var(--color-background-400);
  color: var(--color-text);
  font-size: 1.4rem;
  font-weight: bold;
  cursor: pointer;
  z-index: 999;
`;

function Box() {
  const { movieData, isLoading } = useSelector((state) => state.movie);

  return (
    <StyledBox>
      {!movieData.length && <StartSearching />}
      {isLoading && <Loader />}
      <ul>
        {movieData.map((mov) => (
          <MovieDetailed movie={mov} key={mov.imdbId} />
        ))}
      </ul>
    </StyledBox>
  );
}

export default Box;
