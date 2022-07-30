import React from "react";
import { useLocation } from "react-router-dom";
import { Post } from "components";
import { withDisplayName } from "hoc";
import { Container } from "./PostDetailsPage.styles";

interface LocationState {
  post: PostType;
}

const PostDetailsPage: React.FC = () => {
  const location = useLocation();
  const state = location.state as LocationState;

  return (
    <Container>
      <Post post={state.post} />
    </Container>
  );
};

PostDetailsPage.displayName = "PostDetailsPage";

export default withDisplayName(PostDetailsPage);
