import { NextPage } from "next";
import { privateRoute } from "../HOC/privateRoute";

const Profile: NextPage = (props) => {
  return (
    <>
      <p>Profile page</p>
    </>
  );
};

export default privateRoute(Profile);
