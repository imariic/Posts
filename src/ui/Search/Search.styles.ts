import styled from "styled-components";

export const Input = styled.input.attrs({
  placeholder: "Enter a post title",
})`
  width: 18.75rem;
  height: 3.75rem;
  display: inline-block;
  border-color: ${(p) => p.theme.appleGreen};
  font-size: ${(p) => p.theme.xmedium}rem;
  color: ${(p) => p.theme.blueGreen};
`;
