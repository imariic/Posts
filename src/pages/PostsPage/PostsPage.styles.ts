import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  margin-top: ${(p) => p.theme.large}rem;
`;

export const PostList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 1.25rem 0;
`;
