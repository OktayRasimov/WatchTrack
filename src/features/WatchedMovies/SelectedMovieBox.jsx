import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import AddedWatchedMovies from "./AddedWatchedMovies";
import {
  addIsShowing,
  addMovieComent,
  addWatchedMovies,
} from "../SearchNavbar/movieSlice";
import { HiMiniTrophy } from "react-icons/hi2";

const SelectedImg = styled.img`
  width: fit-content;
  height: auto;
  margin-right: 2rem;
`;

const SelectedMovieFullInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const SelectedMovieUpperPart = styled.div`
  height: fit-content;
  display: flex;
  border-bottom: 3px solid var(--color-light-100);
  position: relative;
  @media (width<=1250px) {
    flex-direction: column;
  }
`;
const SelectedMovieUnderPart = styled.div`
  margin-top: 2rem;
  padding: 2rem;
`;

const SelectedMoviePlot = styled.div`
  color: var(--color-grey-300);

  font-size: 1.8rem;
`;

const AddButton = styled.button`
  padding: 0.6rem 0.6rem;
  width: 70px;
  border-radius: 10px;
  color: #fff;
  background-color: var(--color-light-100);
  border: none;
  position: absolute;
  bottom: 5%;
  right: 50%;
`;

const AlreadyAddedMovie = styled.h2`
  margin-top: 1rem;
  color: var(--color-light-100);
`;

const MovieTitle = styled.h2`
  margin-bottom: 1rem;
`;

const EachProp = styled.span`
  color: #fff;
  font-size: 2rem;
  padding-left: ${(props) => props.$size};
`;

const TextArea = styled.textarea`
  position: absolute;
  width: 40%;
  border-radius: 5px;
  height: auto;
  bottom: 2%;
  right: 1%;
`;

function SelectedMovieBox() {
  const dispatch = useDispatch();
  const selectedMovieData = useSelector((state) => state.movie.selectedMovie);

  const { selectedMovie, isShowing, watchedMovieData, movieComment } =
    useSelector((state) => state.movie);
  const usingSelectedMovieData = {
    ...selectedMovieData,
    message: movieComment,
  };

  // const { Year, imdbRating, Title, Plot, Director, Actors, Poster } =
  //   useSelector((state) => state.movie.selectedMovie);

  function handleAddWatchedMovies() {
    dispatch(addWatchedMovies(usingSelectedMovieData));
    dispatch(addMovieComent(""));
    dispatch(addIsShowing(false));
  }

  const isWatched = watchedMovieData
    .map((movie) => movie.imdbID)
    .includes(selectedMovie.imdbID);

  return (
    <SelectedMovieFullInfo>
      {usingSelectedMovieData.Title && isShowing && (
        <SelectedMovieUpperPart>
          <SelectedImg src={usingSelectedMovieData.Poster} />
          <div>
            <MovieTitle>{usingSelectedMovieData.Title}</MovieTitle>
            <h2>
              Release :
              <EachProp $size="6rem">{usingSelectedMovieData.Year} 🗓</EachProp>
            </h2>
            <h2>
              Director :
              <EachProp $size="5.6rem">
                {usingSelectedMovieData.Director}{" "}
              </EachProp>
            </h2>
            <h2>
              Rating :
              <EachProp $size="7.4rem">
                {usingSelectedMovieData.imdbRating} <HiMiniTrophy />
              </EachProp>
            </h2>
            <h2>
              Cast :
              <EachProp $size="9.6rem">
                {usingSelectedMovieData.Actors}{" "}
              </EachProp>
            </h2>
            <SelectedMoviePlot>{usingSelectedMovieData.Plot}</SelectedMoviePlot>
            {!isWatched ? (
              <AddButton onClick={handleAddWatchedMovies}>Add</AddButton>
            ) : (
              <AlreadyAddedMovie>Movie already watched</AlreadyAddedMovie>
            )}
            {!isWatched && (
              <TextArea
                maxLength={70}
                placeholder="Write a short review"
                style={{ paddingLeft: "1rem" }}
                onChange={(e) => dispatch(addMovieComent(e.target.value))}
              />
            )}
          </div>
        </SelectedMovieUpperPart>
      )}
      <SelectedMovieUnderPart>
        {watchedMovieData.map((eachMov) => (
          <AddedWatchedMovies eachMov={eachMov} key={eachMov.Title} />
        ))}
      </SelectedMovieUnderPart>
    </SelectedMovieFullInfo>
  );
}

export default SelectedMovieBox;
