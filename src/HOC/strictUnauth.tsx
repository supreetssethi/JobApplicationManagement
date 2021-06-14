// import ServerCookie from "next-cookies";
import { NextPageContext } from "next";
import React, { Component } from "react";
import { AuthToken } from "../helper/auth_token";
import { redirectToHome } from "../helper/redirect_service";

export type AuthProps = {
  auth: AuthToken;
};

export function strictUnAuthRoute(WrappedComponent: any) {
  return class extends Component<AuthProps> {
    static async getInitialProps(ctx: NextPageContext) {
      const { req, res } = ctx;

      const { cookies } = req;

      // create AuthToken
      const token = cookies.Token;
      const auth = new AuthToken(token);
      const initialProps = { auth };
      // if the token is expired, that means the user is no longer (or never was) authenticated
      // and if we allow the request to continue, they will reach a page they should not be at.
      if (!auth.isExpired) redirectToHome(ctx.res);
      if (WrappedComponent.getInitialProps) {
        const wrappedProps = await WrappedComponent.getInitialProps(
          initialProps
        );
        // make sure our `auth: AuthToken` is always returned
        // return { ...wrappedProps, auth };
      }
      return initialProps;
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
}
