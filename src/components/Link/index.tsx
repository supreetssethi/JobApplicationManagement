import React, { FC } from "react";
import MUILink from "@material-ui/core/Link";

const Link: FC = ({ children, href }) => {
  // const preventDefault = (event) => event.preventDefault();

  return <MUILink href={href}>{children}</MUILink>;
};

export default Link;
