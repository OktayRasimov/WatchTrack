import { HiVideoCamera } from "react-icons/hi";
import styled from "styled-components";

const LogoDiv = styled.div`
  background-color: inherit;

  display: flex;
  gap: 2rem;
  align-items: center;
`;

const LogoHeader = styled.h3`
  color: var(--color-white-100);
  font-size: 2.6rem;
  @media (width<=750px) {
    font-size: medium;
  }
`;

const ReactIconLogo = styled.span`
  font-size: 3.8rem;
  transform: translateY(5px);
`;

function Logo() {
  return (
    <LogoDiv>
      <ReactIconLogo>
        <HiVideoCamera />
      </ReactIconLogo>
      <LogoHeader>WatchTrack</LogoHeader>
    </LogoDiv>
  );
}

export default Logo;
