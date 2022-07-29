import React from "react";
import { Container } from "./Post.styles";

interface PostProps {
  post: PostType;
}

const Post: React.FC<PostProps> = ({ post }) => {
  const { body, id, title, userId } = post;

  return (
    <Container>
      <h1>{title}</h1>
      <div>{body}</div>
    </Container>
  );
};

export default Post;
