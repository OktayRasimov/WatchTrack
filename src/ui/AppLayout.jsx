import styled from "styled-components";
import NavBar from "../features/SearchNavbar/NavBar";

import WatchedMovies from "../features/WatchedMovies/WatchedMovies";
import Box from "../features/RenderedMovies/Box";

const MainBox = styled.div`
  display: flex;
  gap: 7rem;
  /* background-color: red; */
  justify-content: center;
`;

function AppLayout() {
  return (
    <>
      <NavBar />
      <MainBox>
        <Box />
        <WatchedMovies />
      </MainBox>
    </>
  );
}

export default AppLayout;
