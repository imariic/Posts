import React from "react";
import { Post } from "components";
import { usePosts } from "hooks";
import { Container } from "./PostsPage.styles";

const PostsPage = () => {
  const posts = usePosts();

  return (
    <Container>
      {posts?.map((post) => (
        <Post post={post} />
      ))}
    </Container>
  );
};

export default PostsPage;
