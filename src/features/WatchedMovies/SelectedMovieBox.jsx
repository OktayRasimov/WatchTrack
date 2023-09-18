import { useSelector } from "react-redux";
import styled from "styled-components";
import { BoxButton } from "../RenderedMovies/Box";

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
  display: flex;
  border-bottom: 3px solid var(--color-light-100);
`;
const SelectedMovieUnderPart = styled.div`
  margin-top: 2rem;
  padding: 2rem;
`;

const SelectedMoviePlot = styled.div`
  color: var(--color-grey-300);
  padding-top: 2.6rem;
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

function SelectedMovieBox() {
  const { Year, imdbRating, Title, Runtime, Plot, Director, Actors, Poster } =
    useSelector((state) => state.movie.selectedMovie);

  const { selectedMovie, isShowing } = useSelector((state) => state.movie);

  return (
    <SelectedMovieFullInfo>
      {Title && isShowing && (
        <SelectedMovieUpperPart>
          <SelectedImg src={Poster} />
          <div>
            <h2>{Title}</h2>
            <h2>{Year} 🗓</h2>
            <h2>{Director}</h2>
            <h2>{Actors}</h2>
            <h2>{imdbRating} imbdRating</h2>
            <SelectedMoviePlot>{Plot}</SelectedMoviePlot>
            <AddButton>Add</AddButton>
          </div>
        </SelectedMovieUpperPart>
      )}
      <SelectedMovieUnderPart>
        <h2>test</h2>
      </SelectedMovieUnderPart>
    </SelectedMovieFullInfo>
  );
}

export default SelectedMovieBox;
