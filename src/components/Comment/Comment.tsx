import React from "react";
import { Container, Content } from "./Comment.styles";

interface CommentProps {
  content: string;
}

const Comment: React.FC<CommentProps> = ({ content }) => {
  return (
    <Container>
      <Content>{content}</Content>
    </Container>
  );
};

export default Comment;
