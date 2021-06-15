// import ServerCookie from "next-cookies";
import { NextPageContext } from "next";
import React, { Component } from "react";
import { AuthToken } from "../helper/auth_token";

export type AuthProps = {
  auth: AuthToken;
};

export function commonRoute(WrappedComponent: any) {
  return class extends Component<AuthProps> {
    static async getInitialProps(ctx: NextPageContext) {
      const { req, res } = ctx;
      const { cookies } = req;
      // create AuthToken
      const token = cookies.Token;
      // const refreshToken = cookies.RefreshToken;
      const auth = new AuthToken(token /*refreshToken*/);
      const isLoggedIn = auth.isValid;
      const user = auth.user;
      const initialProps = { auth, isLoggedIn, user };

      if (WrappedComponent.getInitialProps) {
        const wrappedProps = await WrappedComponent.getInitialProps(
          initialProps
        );
      }
      return initialProps;
    }

    get auth() {
      return new AuthToken(this.props.auth.token);
    }
    get user() {
      return new AuthToken(this.props.auth.token).user;
    }
    get isLoggedIn() {
      return new AuthToken(this.props.auth.token).isValid;
    }
    render() {
      return (
        <WrappedComponent
          auth={this.auth}
          user={this.user}
          isLoggedIn={this.isLoggedIn}
          {...this.props}
        />
      );
    }
  };
}
