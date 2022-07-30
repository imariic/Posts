import styled from "styled-components";

export const Input = styled.input.attrs({
  type: "button",
})`
  height: 2.813rem;
  background: linear-gradient(
    to right,
    ${(p) => p.theme.blueGreen} 0%,
    ${(p) => p.theme.cadetBlue} 35%,
    ${(p) => p.theme.jade} 100%
  );
  border-width: 0px;
  border-radius: ${(p) => p.theme.small}rem;
`;
