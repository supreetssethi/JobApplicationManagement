// import App from "next/app";
import type { AppProps /*, AppContext */ } from "next/app";
import { useEffect } from "react";
// import ProtectedRoute from "../helper/ProtectedRoute";

function MyApp({ Component, pageProps, router }: AppProps) {
  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return (
    // <ProtectedRoute router={router}>
    <Component {...pageProps} />
    // </ProtectedRoute>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default MyApp;
