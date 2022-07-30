import React from "react";
import { withDisplayName } from "hoc";
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

Comment.displayName = "Comment";

export default withDisplayName(Comment);
