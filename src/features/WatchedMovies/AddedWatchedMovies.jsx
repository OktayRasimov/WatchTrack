import { useDispatch } from "react-redux";
import styled from "styled-components";
import { removeAddedWatched } from "../SearchNavbar/movieSlice";

const EachAddedMovieContainer = styled.div`
  background-color: var(--color-light-100);
  border-radius: 15px;
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  margin-bottom: 2rem;
  position: relative;
`;

const Img = styled.img`
  height: auto;
  width: 100px;
`;

const CloseButton = styled.span`
  position: absolute;
  top: 2%;
  color: black;
  cursor: pointer;
  left: 97%;
  height: 10px;
  width: auto;
`;

const WatchedTitle = styled.h1``;

function AddedWatchedMovies({ eachMov }) {
  const { Title, Poster, Year, imdbID } = eachMov;
  const dispatch = useDispatch();

  function handleRemoveAdded() {
    dispatch(removeAddedWatched(imdbID));
  }

  return (
    <EachAddedMovieContainer>
      <CloseButton onClick={handleRemoveAdded}>X</CloseButton>
      <Img src={Poster} />
      <WatchedTitle>{Title}</WatchedTitle>
    </EachAddedMovieContainer>
  );
}

export default AddedWatchedMovies;
