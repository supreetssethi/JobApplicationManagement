import React, { FC, useState } from "react";
import Button from "../components/Button";
import Link from "../components/Link";
import PublicLayoutForm from "../layouts/PublicLayoutForm";
import Grid from "@material-ui/core/Grid";
import Textfield from "@material-ui/core/TextField";
import { ForgotPasswordForm } from "../types";
let forgotPasswordInitialFormData = {
  email: "",
};
const ForgotPassword: FC = () => {
  let [formData, setFormData] = useState<ForgotPasswordForm>(
    forgotPasswordInitialFormData
  );
  let [error, setError] = useState<string>(null);
  let [isLoading, setIsLoading] = useState<boolean>(false);
  let handleSubmit = async (event) => {
    setError(null);
    event.preventDefault();
    alert("forgot password submit");
  };

  let handleChange = (event) => {
    let newFormData = { ...formData };
    newFormData[event.target.name] = event.target.value;
    setFormData(newFormData);
  };
  return (
    <PublicLayoutForm title={"Forgot password"}>
      <form
        id="forgotPassword"
        onSubmit={handleSubmit}
        noValidate
        autoComplete="off"
      >
        {error}
        <Grid item xs={12}>
          <Textfield
            type="email"
            onChange={handleChange}
            name="email"
            fullWidth
            label="Email"
            value={formData.email}
          />
        </Grid>
        <Grid container direction="row" justify="center" alignItems="center">
          <Button
            buttonType="submit"
            disabled={isLoading}
            formName="forgotPassword"
          >
            Submit
          </Button>
        </Grid>
      </form>
      <section>
        <Grid container direction="row" justify="center" alignItems="center">
          <p>Change your mind?</p>
          <Link href="/login">Sign in</Link>
        </Grid>
      </section>
    </PublicLayoutForm>
  );
};

export default ForgotPassword;
