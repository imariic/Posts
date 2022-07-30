import React from "react";
import { withDisplayName } from "hoc";
import { Body } from "./PostBody.styles";

interface PostBodyProps {
  body: string;
}

const PostBody: React.FC<PostBodyProps> = ({ body }) => {
  return <Body>{body}</Body>;
};

PostBody.displayName = "PostBody";

export default withDisplayName(PostBody);
