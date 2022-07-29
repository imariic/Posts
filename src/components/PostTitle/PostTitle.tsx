import React from "react";
import { Title } from "./PostTitle.styles";

interface PostTitleProps {
  text: string;
}

const PostTitle: React.FC<PostTitleProps> = ({ text }) => {
  return <Title>{text}</Title>;
};

export default PostTitle;
