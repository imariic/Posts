import React from "react";
import { PostId } from "./PostHeader.styles";

interface PostHeaderProps {
  postId: number;
}

const PostHeader: React.FC<PostHeaderProps> = ({ postId }) => {
  return <PostId>ID: {postId}</PostId>;
};

export default PostHeader;
