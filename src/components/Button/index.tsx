import React, { FC } from "react";
import MUIButton from "@material-ui/core/Button";
import { Interface } from "readline";

enum ButtonType {
  button = "button",
  submit = "submit",
  reset = "reset",
}
const Button: FC = ({
  children,
  onClick,
  isLink,
  href,
  buttonType,
  formName,
  disabled,
  color,
  variant,
  endIcon,
}: {
  buttonType: ButtonType;
  color?: string;
  variant?: string;
  endIcon?: React.ReactComponentElement;
}) => {
  if (isLink)
    return (
      <MUIButton variant={variant} href={href} color={color} endIcon={endIcon}>
        {children}
      </MUIButton>
    );
  else
    return (
      <MUIButton
        color={color}
        disabled={disabled}
        variant={variant}
        onClick={(e) => {
          onClick && onClick(e);
        }}
        form={formName}
        endIcon={endIcon}
        type={buttonType}
      >
        {children}
      </MUIButton>
    );
};

export default Button;
