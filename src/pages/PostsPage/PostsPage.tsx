import React, { useId } from "react";
import { Post } from "components";
import { usePosts } from "hooks";
import { Container } from "./PostsPage.styles";

const PostsPage = () => {
  const posts = usePosts();
  return (
    <Container>
      {posts?.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </Container>
  );
};

export default PostsPage;
