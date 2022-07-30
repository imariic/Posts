import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.41);
  height: 100%;
  width: 100%;
`;

export const Content = styled.div`
  position: fixed;
  width: 43.75rem;
  height: 37.5rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: ${(p) => p.theme.xlarge}rem;
`;
