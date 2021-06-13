import routes from "../constants/routes";
// import { useAuthContext } from "../contexts";

//check if you are on the client (browser) or server
const isBrowser = () => typeof window !== "undefined";

const ProtectedRoute = ({ router, children }) => {
  //Identify authenticated user
  // const { user } = useAuthContext();
  const isAuthenticated = false; //user.isLoggedIn;

  let unprotectedRoutes = [
    routes.LOGIN_PAGE,
    routes.FORGOT_PASSWORD,
    routes.HOME,
    routes.SIGNUP,
    routes.PROFILES,
  ];

  /**
   * @var pathIsProtected Checks if path exists in the unprotectedRoutes routes array
   */
  let pathIsProtected = unprotectedRoutes.indexOf(router.pathname) === -1;

  if (isBrowser() && !isAuthenticated && pathIsProtected) {
    router.push(routes.LOGIN_PAGE);
  }

  return children;
};

export default ProtectedRoute;
