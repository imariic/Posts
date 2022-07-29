import React from "react";
import { PostTitle } from "components";
import { Container } from "./Post.styles";

interface PostProps {
  post: PostType;
}

const Post: React.FC<PostProps> = ({ post }) => {
  const { body, id, title, userId } = post;

  return (
    <Container>
      <PostTitle text={title} />
      <div>{body}</div>
    </Container>
  );
};

export default Post;
