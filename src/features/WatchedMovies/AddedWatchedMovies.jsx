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

const WatchedTitle = styled.h3``;

const AddedPosterTitle = styled.div`
  display: flex;
  gap: 2rem;
  width: 50%;
  max-width: 50%;
`;
const AddedReviewComment = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  border-left: solid 1px black;
  width: 50%;
  max-width: 50%;
  padding-left: 1rem;
  gap: 1rem;
`;

const ReviewTitle = styled.h3`
  font-size: 2rem;
  color: #fff;
`;

function AddedWatchedMovies({ eachMov }) {
  const { Title, Poster, Year, imdbID, message } = eachMov;
  const dispatch = useDispatch();

  function handleRemoveAdded() {
    dispatch(removeAddedWatched(imdbID));
  }

  return (
    <EachAddedMovieContainer>
      <CloseButton onClick={handleRemoveAdded}>X</CloseButton>
      <AddedPosterTitle>
        <Img src={Poster} />
        <WatchedTitle>{Title}</WatchedTitle>
      </AddedPosterTitle>
      <AddedReviewComment>
        <ReviewTitle>Review</ReviewTitle>
        {/* <p>{!message ? "Movie Not Rated" : message}</p> */}
        {!message ? <h2>Movie Not Rated</h2> : <h4>{message}</h4>}
      </AddedReviewComment>
    </EachAddedMovieContainer>
  );
}

export default AddedWatchedMovies;
