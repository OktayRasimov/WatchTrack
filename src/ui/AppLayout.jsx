import styled from "styled-components";
import NavBar from "../features/SearchNavbar/NavBar";
import Box from "./Box";

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
        <Box />
      </MainBox>
    </>
  );
}

export default AppLayout;
