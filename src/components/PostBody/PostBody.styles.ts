import styled from "styled-components";

export const Body = styled.p`
  margin-top: ${(p) => p.theme.large}px;
  font-weight: 500;
  color: ${(p) => p.theme.blueGreen};
  font-size: ${(p) => p.theme.medium}px;

  &::first-letter {
    text-transform: uppercase;
  }
`;
