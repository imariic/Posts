import React from "react";
import { useNavigate } from "react-router-dom";
import { PostTitle, PostHeader, PostBody } from "components";
import { Container } from "./Post.styles";

interface PostProps {
  post: PostType;
}

const Post: React.FC<PostProps> = ({ post }) => {
  const navigate = useNavigate();
  const { body, id, title } = post;

  const handlePostPress = () => {
    navigate(id);
  };

  return (
    <Container onClick={handlePostPress}>
      <PostHeader postId={id} />
      <PostTitle text={title} />
      <PostBody body={body} />
    </Container>
  );
};

export default Post;
