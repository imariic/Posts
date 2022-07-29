import styled from "styled-components";

export const Container = styled.div`
  width: 500px;
  height: 300px;
  background: linear-gradient(
    to right bottom,
    ${(p) => p.theme.wageningenGreen} 0%,
    ${(p) => p.theme.pastelGreen} 35%,
    ${(p) => p.theme.teaGreen} 100%
  );
`;
