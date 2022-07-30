import styled from "styled-components";

export const Input = styled.input.attrs({
  placeholder: "Enter a post title",
})`
  width: 300px;
  height: 60px;
  display: inline-block;
  border-color: ${(p) => p.theme.appleGreen};
  font-size: ${(p) => p.theme.xmedium}px;
  color: ${(p) => p.theme.blueGreen};
`;
