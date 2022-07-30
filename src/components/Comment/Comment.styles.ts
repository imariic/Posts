import styled from "styled-components";

export const Container = styled.div`
  border-width: 1px;
  border-color: black;
  height: 6.25rem;
  width: 100%;
  margin-top: ${(p) => p.theme.medium}rem;
`;

export const Content = styled.div`
  border-width: 1px;
  border-bottom: solid;
  border-color: ${(p) => p.theme.blueGreen};
  padding-bottom: ${(p) => p.theme.medium}rem;
  &::first-letter {
    text-transform: uppercase;
  }
`;
