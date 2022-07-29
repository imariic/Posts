import React from "react";
import { Body } from "./PostBody.styles";

interface PostBodyProps {
  body: string;
}

const PostBody: React.FC<PostBodyProps> = ({ body }) => {
  return <Body>{body}</Body>;
};

export default PostBody;
