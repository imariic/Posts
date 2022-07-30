import React from "react";
import { Input } from "./Button.styles";

interface ButtonProps {
  title: string;
  onClick: (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
}

const Button: React.FC<ButtonProps> = ({ title, onClick }) => {
  return <Input onClick={onClick} value={title} />;
};

export default Button;
