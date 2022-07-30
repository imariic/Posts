import React from "react";
import { withDisplayName } from "hoc";
import { Container, Content } from "./Modal.styles";

interface ModalProps {
  setIsVisible: (isVisible: boolean) => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ setIsVisible, children }) => {
  const handleHide = () => {
    setIsVisible(false);
  };

  return (
    <Container onClick={handleHide}>
      <Content>{children}</Content>
    </Container>
  );
};

Modal.displayName = "Modal";

export default withDisplayName(Modal);
