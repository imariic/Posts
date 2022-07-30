import React from "react";
import { withDisplayName } from "hoc";
import { Title } from "./PostTitle.styles";

interface PostTitleProps {
  text: string;
}

const PostTitle: React.FC<PostTitleProps> = ({ text }) => {
  return <Title>{text}</Title>;
};

PostTitle.displayName = "PostTitle";

export default withDisplayName(PostTitle);
