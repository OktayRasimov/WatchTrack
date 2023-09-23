import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const LoaderRing = styled.div`
  /* display: inline-block; */
  position: absolute;
  top: 10%;
  left: 40%;
  animation: ${rotate} 4s linear infinite;
  font-size: 24.2rem;

  color: var(--color-light-100);
`;

function Loader() {
  return <LoaderRing>⚙</LoaderRing>;
}

export default Loader;
