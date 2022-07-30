import styled from "styled-components";

export const Body = styled.p`
  margin-top: ${(p) => p.theme.medium}rem;
  font-weight: 500;
  color: ${(p) => p.theme.blueGreen};
  font-size: ${(p) => p.theme.medium}rem;

  &::first-letter {
    text-transform: uppercase;
  }
`;
