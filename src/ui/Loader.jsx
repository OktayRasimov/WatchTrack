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
  animation: ${rotate} 3s linear infinite;

  font-size: 12.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding-top: 50%; */
  color: var(--color-light-100);
`;

function Loader() {
  return <LoaderRing>⚙</LoaderRing>;
}

export default Loader;
