import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addSelectedMovie } from "../SearchNavbar/movieSlice";

const Img = styled.img`
  height: 40%;
  margin-bottom: 0.6rem;
  border-radius: 10px;
`;
const StyledLi = styled.li`
  margin-top: 2rem;
  transition: all 0.4s;
  text-align: center;
  padding-bottom: 1rem;
  cursor: pointer;
  &:hover {
    transform: translateY(-5px);
  }
`;

const MovieTitle = styled.p`
  font-size: 3rem;
  font-weight: 700;
`;

function MovieDetailed({ movie }) {
  const { Title, Poster } = movie;

  const dispatch = useDispatch();

  function handleAddSelectedMovie() {
    dispatch(addSelectedMovie(movie));
  }

  return (
    <StyledLi onClick={handleAddSelectedMovie}>
      <Img src={Poster} />
      <MovieTitle>{Title}</MovieTitle>
    </StyledLi>
  );
}

export default MovieDetailed;
