import React, { FC } from "react";
import Container from "@material-ui/core/Container";
import { DecodedToken } from "../../helper/auth_token";
import Header from "../../components/Header";

interface Props {
  children: React.ReactChild;
  user: DecodedToken;
}
const LoggedInWithHeader: FC<Props> = ({ children, user }) => {
  return (
    <Container fixed>
      <Header user={user} />
      {children}
    </Container>
  );
};

export default LoggedInWithHeader;
