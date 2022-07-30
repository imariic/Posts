import React from "react";
import { Content } from "./Comment.styles";

interface CommentProps {
  content: string;
}

const Comment: React.FC<CommentProps> = ({ content }) => {
  return <Content>{content}</Content>;
};

export default Comment;
