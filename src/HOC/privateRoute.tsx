// import ServerCookie from "next-cookies";
import { NextPageContext } from "next";
import React, { Component } from "react";
import { AuthToken } from "../helper/auth_token";
import { redirectToLogin } from "../helper/redirect_service";

export type AuthProps = {
  auth: AuthToken;
};

export function privateRoute(WrappedComponent: any) {
  return class extends Component<AuthProps> {
    static async getInitialProps(ctx: NextPageContext) {
      const { req, res } = ctx;

      const { cookies } = req;

      // create AuthToken
      const token = cookies.Authorization;
      const auth = new AuthToken(token);
      const initialProps = { auth };
      // if the token is expired, that means the user is no longer (or never was) authenticated
      // and if we allow the request to continue, they will reach a page they should not be at.
      if (auth.isExpired) redirectToLogin(ctx.res);
      if (WrappedComponent.getInitialProps) {
        const wrappedProps = await WrappedComponent.getInitialProps(
          initialProps
        );
        // make sure our `auth: AuthToken` is always returned
        // return { ...wrappedProps, auth };
      }
      return initialProps;
    }

    get auth() {
      // the server pass to the client serializes the token
      // so we have to reinitialize the authToken class
      //
      // @see https://github.com/zeit/next.js/issues/3536
      return new AuthToken(this.props.auth.token);
    }

    render() {
      return <WrappedComponent auth={this.auth} {...this.props} />;
    }
  };
}
