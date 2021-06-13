import React, { FC } from "react";
import { privateRoute } from "../HOC/privateRoute";

const Profile: FC = (props) => {
  return (
    <>
      <p>Profile page</p>
    </>
  );
};

export default privateRoute(Profile);
