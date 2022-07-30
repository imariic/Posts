import React from "react";
import { useLocation } from "react-router-dom";
import { Post } from "components";
import { Container } from "./PostDetailsPage.styles";

interface LocationState {
  post: PostType;
}

const PostDetailsPage = () => {
  const location = useLocation();
  const state = location.state as LocationState;

  return (
    <Container>
      <Post post={state.post} />
    </Container>
  );
};

export default PostDetailsPage;
