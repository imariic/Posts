import React, { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PostTitle, PostHeader, PostBody } from "components";
import { ModalContext, UsersContext } from "providers";
import { findUser } from "helpers";
import { Button, Modal } from "ui";
import { Container, ButtonContainer } from "./Post.styles";

interface PostProps {
  post: PostType;
}

const Post: React.FC<PostProps> = ({ post }) => {
  const navigate = useNavigate();
  const params = useParams();
  const users = useContext(UsersContext);
  const { setIsVisible } = useContext(ModalContext);

  const isNotTriggered = params.id;
  const { body, id, title } = post;

  useEffect(() => {
    setIsVisible(false);
  }, []);

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
    setIsVisible(true);
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
