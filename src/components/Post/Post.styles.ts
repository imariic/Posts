import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  height: 400px;
  background: linear-gradient(
    to right bottom,
    ${(p) => p.theme.wageningenGreen} 0%,
    ${(p) => p.theme.pastelGreen} 35%,
    ${(p) => p.theme.teaGreen} 100%
  );
  margin: ${(p) => p.theme.medium}px;
  padding: ${(p) => p.theme.xmedium}px;
  box-shadow: 3px 10px 11px 0px ${(p) => p.theme.blueGreen};
  &:hover {
    cursor: pointer;
  }
`;

export const ButtonContainer = styled.div`
  position: absolute;
  bottom: ${(p) => p.theme.medium}px;
`;
