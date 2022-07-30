import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PostTitle, PostHeader, PostBody } from "components";
import { Container } from "./Post.styles";

interface PostProps {
  post: PostType;
}

const Post: React.FC<PostProps> = ({ post }) => {
  const navigate = useNavigate();
  const params = useParams();

  const isNotTriggered = params.id;
  const { body, id, title } = post;

  const handlePostPress = () => {
    if (isNotTriggered) return;

    navigate(`${id}`, {
      state: {
        post,
      },
    });
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
