import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import { getMovies } from "../../services/useMovies";
import { useSelector, useDispatch } from "react-redux";
import { addQuery } from "./movieSlice";

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
  console.log(searchQuery);
  const dispatch = useDispatch();

  // Queries
  const movieData = useQuery({
    queryKey: ["getMovies"],
    queryFn: () => getMovies(searchQuery),
  });

  console.log(movieData);

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
