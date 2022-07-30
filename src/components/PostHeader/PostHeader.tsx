import React from "react";
import { withDisplayName } from "hoc";
import { PostId } from "./PostHeader.styles";

interface PostHeaderProps {
  postId: number;
}

const PostHeader: React.FC<PostHeaderProps> = ({ postId }) => {
  return <PostId>ID: {postId}</PostId>;
};

PostHeader.displayName = "PostHeader";

export default withDisplayName(PostHeader);
