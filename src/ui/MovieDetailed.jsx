import styled from "styled-components";

const Img = styled.img`
  height: 40%;
  margin-bottom: 0.6rem;
  border-radius: 10px;
`;
const StyledLi = styled.li`
  margin-top: 2rem;

  text-align: center;
  padding-bottom: 1rem;
`;

const MovieTitle = styled.p`
  font-size: 3rem;
  font-weight: 700;
`;

function MovieDetailed({ movie }) {
  const { Title, Poster } = movie;
  console.log(movie);
  return (
    <StyledLi>
      <Img src={Poster} />
      <MovieTitle>{Title}</MovieTitle>
    </StyledLi>
  );
}

export default MovieDetailed;
