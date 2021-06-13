export interface LoginForm {
  email: string;
  password: string;
  rememberMe: boolean;
}

export interface ForgotPasswordForm {
  email: string;
}

export interface SignUpForm {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  agree: boolean;
}

export interface ApiCallInterface {
  url: string;
  options?: RequestInit;
}
