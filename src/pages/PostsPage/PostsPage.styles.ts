import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  margin-top: ${(p) => p.theme.large}px;
`;

export const PostList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px 0;
`;
