import React from "react";
import { PostTitle, PostHeader, PostBody } from "components";
import { Container } from "./Post.styles";

interface PostProps {
  post: PostType;
}

const Post: React.FC<PostProps> = ({ post }) => {
  const { body, id, title } = post;

  return (
    <Container>
      <PostHeader postId={id} />
      <PostTitle text={title} />
      <PostBody body={body} />
    </Container>
  );
};

export default Post;
