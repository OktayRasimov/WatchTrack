import styled from "styled-components";
import Logo from "../../ui/Logo";
import NavBarSearch from "./NavBarSearch";
import NavBarFoundMovies from "./NavBarFoundMovies";

const NavbarContainer = styled.div`
  background-color: var(--color-light-100);
  display: flex;
  justify-content: space-between;
  margin: 2rem;
  border-radius: 10px;
  padding: 1.2rem 2rem;
  align-items: center;
`;

function NavBar() {
  return (
    <NavbarContainer>
      <Logo />
      <NavBarSearch />
      <NavBarFoundMovies />
    </NavbarContainer>
  );
}

export default NavBar;
