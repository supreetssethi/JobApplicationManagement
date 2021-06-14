import jwtDecode from "jwt-decode";
// import router from "next/router";

interface DecodedToken {
  readonly _id: string;
  readonly email: string;
  readonly name: {
    readonly first: string;
    readonly last: string;
  };
  readonly iat: number;
  readonly exp: number;
}
// interface DecodedRefreshToken {
//   readonly _id: string;
//   readonly exp: number;
// }

export class AuthToken {
  readonly decodedToken: DecodedToken;
  //   readonly decodedRefreshToken: DecodedRefreshToken;

  constructor(readonly token?: string /*readonly refreshToken?: string*/) {
    // we are going to default to an expired decodedToken
    this.decodedToken = {
      _id: "",
      email: "",
      name: {
        first: "",
        last: "",
      },
      iat: 0,
      exp: 0,
    };
    // this.decodedRefreshToken = {
    //   _id: "",
    //   exp: 0,
    // };
    // then try and decode the jwt using jwt-decode
    try {
      if (token) this.decodedToken = jwtDecode(token);
      //   if (refreshToken) this.decodedRefreshToken = jwtDecode(refreshToken);
    } catch (e) {}
  }

  //   get authorizationString() {
  //     return `Bearer ${this.token}`;
  //   }

  get expiresAt(): Date {
    return new Date(this.decodedToken.exp * 1000);
  }

  get isExpired(): boolean {
    return new Date() > this.expiresAt;
  }

  get isValid(): boolean {
    return !this.isExpired;
  }

  //   get refreshTokenExpiresAt(): Date {
  //     return new Date(this.decodedRefreshToken.exp * 1000);
  //   }

  //   get isRefreshTokenExpired(): boolean {
  //     return new Date() > this.refreshTokenExpiresAt;
  //   }

  //   get isRefreshTokenValid(): boolean {
  //     return !this.refreshTokenIsExpired;
  //   }
}
