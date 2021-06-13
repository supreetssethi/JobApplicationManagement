import React, { FC, FormEvent, useState } from "react";
import Button from "../components/Button";
import Link from "../components/Link";
import PublicLayoutForm from "../layouts/PublicLayoutForm";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Grid } from "@material-ui/core";
import { SignUpForm } from "../types";
import { executePost } from "../lib/api";

let signUpInitialFormData = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  agree: false,
};
const Signup: FC = () => {
  let [formData, setFormData] = useState<SignUpForm>(signUpInitialFormData);
  let [error, setError] = useState(null);
  let [isLoading, setIsLoading] = useState(false);

  let handleSubmit = async (event) => {
    setError(null);
    setIsLoading(true);
    event.preventDefault();
    let submitFormData = {
      name: {
        first: formData.firstName,
        last: formData.lastName,
      },
      email: formData.email,
      password: formData.password,
    };
    let response = await executePost(
      "http://localhost:8000/signup",
      submitFormData
    );
    setIsLoading(false);
    if (response.isSuccess) {
      console.log(response.data);
    } else {
      setError(response.err);
    }
  };

  let handleChange = (event) => {
    let newFormData = { ...formData };
    newFormData[event.target.name] = event.target.value;
    setFormData(newFormData);
  };
  let handleCheckboxChange = (event) => {
    let newFormData = { ...formData };
    newFormData[event.target.name] = event.target.checked;
    setFormData(newFormData);
  };

  return (
    <PublicLayoutForm title={"Get stareted"}>
      <form id="singUp" onSubmit={handleSubmit} noValidate autoComplete="off">
        {error}
        <Grid item xs={12}>
          <TextField
            onChange={handleChange}
            name="firstName"
            fullWidth
            label="First name"
            value={formData.firstName}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            onChange={handleChange}
            name="lastName"
            fullWidth
            label="Last name"
            value={formData.lastName}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            onChange={handleChange}
            type="email"
            fullWidth
            name="email"
            label="Email"
            value={formData.email}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            onChange={handleChange}
            type="password"
            fullWidth
            name="password"
            label="Password"
            value={formData.password}
          />
        </Grid>
        <Grid item xs={12}>
          <Grid container direction="row" justify="center" alignItems="center">
            <FormControlLabel
              control={
                <Checkbox
                  checked={formData.agree}
                  onChange={handleCheckboxChange}
                  name="agree"
                  color="primary"
                />
              }
              label="Agree to terms and policy"
            />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container direction="row" justify="center" alignItems="center">
            <Button buttonType="submit" disabled={isLoading} formName="singUp">
              Get started now
            </Button>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container direction="row" justify="center" alignItems="center">
            <Link href="/login">Sign in</Link>
          </Grid>
        </Grid>
      </form>
    </PublicLayoutForm>
  );
};

export default Signup;
