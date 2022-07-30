import React from "react";
import { Container, Content } from "./Modal.styles";

interface ModalProps {
  isVisible: boolean;
  setIsVisible: (isVisible: boolean) => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isVisible, setIsVisible, children }) => {
  const handleHide = () => {
    setIsVisible(false);
  };

  return (
    <Container onClick={handleHide}>
      <Content>{children}</Content>
    </Container>
  );
};

export default Modal;
