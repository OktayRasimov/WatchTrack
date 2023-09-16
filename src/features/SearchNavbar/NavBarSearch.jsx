import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import { getMovies } from "../../services/useMovies";
import { useSelector, useDispatch } from "react-redux";
import { addMovies, addQuery } from "./movieSlice";

const NavbarInput = styled.input`
  width: 15%;
  height: 40px;
  border-radius: 10px;
  padding: 0 1.4rem;
  outline: none;
  border: none;
  &:focus {
    border: 1px solid var(--color-grey-500);
  }
`;

function NavBarSearch() {
  const searchQuery = useSelector((state) => state.movie.query);
  const foundMovies = useSelector((state) => state.movie.moviesFound);

  const dispatch = useDispatch();

  //React Queries movie data fetching
  const { data, isLoading } = useQuery({
    queryKey: ["getMovies"],
    queryFn: () => getMovies(searchQuery),
  });

  const moviesFound = data?.Search ? data.Search : ["Not Found"];

  dispatch(addMovies(moviesFound));

  return (
    <NavbarInput
      placeholder="Search Movies..."
      onChange={(e) =>
        setTimeout(() => {
          dispatch(addQuery(e.target.value));
        }, 3000)
      }
    />
  );
}

export default NavBarSearch;
