import React from "react";
import { withDisplayName } from "hoc";
import { Input } from "./Button.styles";

interface ButtonProps {
  title: string;
  onClick: (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
}

const Button: React.FC<ButtonProps> = ({ title, onClick }) => {
  return <Input onClick={onClick} value={title} />;
};

Button.displayName = "Button";

export default withDisplayName(Button);
