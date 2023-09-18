import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { BoxButton } from "../RenderedMovies/Box";
import AddedWatchedMovies from "./AddedWatchedMovies";
import { addIsShowing, addWatchedMovies } from "../SearchNavbar/movieSlice";
import { HiMiniTrophy } from "react-icons/hi2";

const SelectedImg = styled.img`
  width: auto;
  height: 400px;
  margin-right: 2rem;
`;

const SelectedMovieFullInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const SelectedMovieUpperPart = styled.div`
  height: 42rem;
  display: flex;
  border-bottom: 3px solid var(--color-light-100);
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
  margin: 2rem 0;
  padding: 0.6rem 0.6rem;
  width: 70px;
  border-radius: 10px;
  color: #fff;
  background-color: var(--color-light-100);
  border: none;
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

function SelectedMovieBox() {
  const dispatch = useDispatch();
  const { Year, imdbRating, Title, Runtime, Plot, Director, Actors, Poster } =
    useSelector((state) => state.movie.selectedMovie);

  const { selectedMovie, isShowing, watchedMovieData } = useSelector(
    (state) => state.movie
  );

  function handleAddWatchedMovies() {
    dispatch(addWatchedMovies(selectedMovie));
    dispatch(addIsShowing(false));
  }

  const isWatched = watchedMovieData
    .map((movie) => movie.imdbID)
    .includes(selectedMovie.imdbID);

  return (
    <SelectedMovieFullInfo>
      {Title && isShowing && (
        <SelectedMovieUpperPart>
          <SelectedImg src={Poster} />
          <div>
            <MovieTitle>{Title}</MovieTitle>
            <h2>
              Release :<EachProp $size="6rem">{Year} 🗓</EachProp>
            </h2>
            <h2>
              Director :<EachProp $size="5.6rem">{Director} </EachProp>
            </h2>
            <h2>
              Rating :
              <EachProp $size="7.4rem">
                {imdbRating} <HiMiniTrophy />
              </EachProp>
            </h2>
            <h2>
              Cast :<EachProp $size="9.6rem">{Actors} </EachProp>
            </h2>
            <SelectedMoviePlot>{Plot}</SelectedMoviePlot>
            {!isWatched ? (
              <AddButton onClick={handleAddWatchedMovies}>Add</AddButton>
            ) : (
              <AlreadyAddedMovie>Movie already added</AlreadyAddedMovie>
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
