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
}: {
  buttonType: ButtonType;
}) => {
  if (isLink)
    return (
      <MUIButton variant="contained" color="primary" href={href}>
        {children}
      </MUIButton>
    );
  else
    return (
      <MUIButton
        disabled={disabled}
        variant="contained"
        color="primary"
        onClick={() => onClick}
        form={formName}
        type={buttonType}
      >
        {children}
      </MUIButton>
    );
};

export default Button;
