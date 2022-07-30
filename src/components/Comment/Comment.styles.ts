import styled from "styled-components";

export const Container = styled.div`
  border-width: 1px;
  border-color: black;
  height: 100px;
  width: 100%;
  margin-top: ${(p) => p.theme.medium}px;
`;

export const Content = styled.div`
  border-width: 1px;
  border-bottom: solid;
  border-color: ${(p) => p.theme.blueGreen};
  padding-bottom: ${(p) => p.theme.medium}px;
  &::first-letter {
    text-transform: uppercase;
  }
`;
