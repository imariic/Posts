import React from "react";
import { Post } from "components";
import { usePosts } from "hooks";
import { Search } from "ui";
import { Container, PostList } from "./PostsPage.styles";

const PostsPage = () => {
  const posts = usePosts();
  return (
    <Container>
      <Search />
      <PostList>
        {posts?.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </PostList>
    </Container>
  );
};

export default PostsPage;
