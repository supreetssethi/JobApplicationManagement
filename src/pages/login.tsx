import React, { FC, useState } from "react";
import Button from "../components/Button";
import Link from "../components/Link";
import PublicLayoutForm from "../layouts/PublicLayoutForm";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { LoginForm } from "../types";
import router from "next/router";
import { strictUnAuthRoute } from "../HOC/strictUnauth";

let signInInitialFormData = {
  email: "supreet.s.sethi@gmail.com",
  password: "suprit12",
};
const Login: FC = () => {
  let [formData, setFormData] = useState<LoginForm>(signInInitialFormData);
  let [error, setError] = useState<string>(null);
  let [isLoading, setIsLoading] = useState<boolean>(false);
  let handleSubmit = async (event) => {
    setError(null);
    event.preventDefault();
    let submitFormData = {
      email: formData.email,
      password: formData.password,
    };
    setIsLoading(true);
    let response = await fetch("http://localhost:8000/login", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        "Accept-Encoding": "application/job",
      },
      credentials: "include",
      body: JSON.stringify(submitFormData), // body data type must match "Content-Type" header
    });
    setIsLoading(false);
    if (response.ok) {
      let data = await response.json();
      router.push("/");
    } else {
      let err = await response.text();
      setError(err);
    }
  };

  let handleChange = (event) => {
    let newFormData = { ...formData };
    newFormData[event.target.name] = event.target.value;
    setFormData(newFormData);
  };
  return (
    <PublicLayoutForm title="Login">
      <Grid item xs={12}>
        <p>Sign in with</p>
      </Grid>
      <Grid item xs={12}>
        <a>Linked in</a>
        <a>Google</a>
      </Grid>
      <form id="login" onSubmit={handleSubmit} noValidate autoComplete="off">
        {error}
        <Grid item xs={12}>
          <TextField
            type="email"
            onChange={handleChange}
            name="email"
            fullWidth
            label="Email"
            value={formData.email}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            type="password"
            onChange={handleChange}
            name="password"
            fullWidth
            label="Password"
            value={formData.password}
          />
        </Grid>
        <Grid item xs={12}>
          <Grid container direction="row" justify="center" alignItems="center">
            <Button buttonType="submit" disabled={isLoading} formName="login">
              Sign in
            </Button>
          </Grid>
        </Grid>
      </form>
      <Grid item xs={12}>
        <Grid container direction="row" justify="center" alignItems="center">
          <Link href="/signup">Get started now</Link>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container direction="row" justify="center" alignItems="center">
          <Link href="/forgotpassword">Reset password</Link>
        </Grid>
      </Grid>
    </PublicLayoutForm>
  );
};

export default strictUnAuthRoute(Login);
