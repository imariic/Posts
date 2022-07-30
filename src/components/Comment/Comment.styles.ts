import styled from "styled-components";

export const Container = styled.div`
  border-width: 1px;
  border-color: black;
  width: 100%;
  margin: ${(p) => p.theme.medium}rem 0;
`;

export const Content = styled.div`
  border-width: 1px;
  border-bottom: solid;
  border-color: ${(p) => p.theme.blueGreen};
  &::first-letter {
    text-transform: uppercase;
  }
  padding-bottom: 0.5rem;
`;
