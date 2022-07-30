import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PostTitle, PostHeader, PostBody } from "components";
import { UsersContext } from "providers";
import { findUser } from "helpers";
import { Button } from "ui";
import { Container, ButtonContainer } from "./Post.styles";

interface PostProps {
  post: PostType;
}

const Post: React.FC<PostProps> = ({ post }) => {
  const navigate = useNavigate();
  const params = useParams();
  const users = useContext(UsersContext);

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

  const handleShowComments = (
    event: React.MouseEvent<HTMLInputElement, MouseEvent>
  ) => {
    event.stopPropagation();
  };

  const renderName = () => {
    const { userId } = post;
    const user = findUser(userId, users);

    return <PostBody body={`Name: ${user?.name}`} />;
  };

  return (
    <Container onClick={handlePostPress}>
      <PostHeader postId={id} />
      <PostTitle text={title} />
      <PostBody body={body} />
      {renderName()}
      <ButtonContainer>
        <Button title="Show comments" onClick={handleShowComments} />
      </ButtonContainer>
    </Container>
  );
};

export default Post;
