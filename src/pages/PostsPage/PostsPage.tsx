import React, { useState } from "react";
import { Post } from "components";
import { usePosts } from "hooks";
import { Search } from "ui";
import { filterPosts } from "helpers";
import { Container, PostList } from "./PostsPage.styles";

const PostsPage = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const posts = usePosts();

  const filteredPosts = filterPosts(searchTerm, posts);

  return (
    <Container>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <PostList>
        {filteredPosts?.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </PostList>
    </Container>
  );
};

export default PostsPage;
