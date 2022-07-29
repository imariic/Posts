import React from "react";

interface PostProps {
  post: PostType;
}

const Post: React.FC<PostProps> = ({ post }) => {
  const { body, id, title, userId } = post;

  return (
    <div>
      <h1>{title}</h1>
      <div>{body}</div>
    </div>
  );
};

export default Post;
