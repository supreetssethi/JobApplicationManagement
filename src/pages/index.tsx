import { NextPage } from "next";
import { commonRoute } from "../HOC/commonRoute";
import HomeWithoutLogin from "../components/Pages/HomeWithoutLogin";
import HomePostLogin from "../components/Pages/HomePostLogin";
import LoggedInWithHeader from "../layouts/LoggedInWithHeader";
import { DecodedToken } from "../helper/auth_token";
interface HomePageProps {
  user: DecodedToken;
  isLoggedIn: boolean;
}
const Home: NextPage = ({ user, isLoggedIn }: HomePageProps) => {
  if (!isLoggedIn) return <HomeWithoutLogin />;
  else
    return (
      <LoggedInWithHeader user={user}>
        <HomePostLogin />
      </LoggedInWithHeader>
    );
};
// Home.getInitialProps = async (ctx) => {
//   return {
//     isValid: ctx.auth.isValid,
//   };
// };
export default commonRoute(Home);
