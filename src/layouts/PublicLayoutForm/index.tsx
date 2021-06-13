import React, { FC } from "react";
import Container from "@material-ui/core/Container";
import { Grid, Paper } from "@material-ui/core";

interface Props {
  children: React.ReactChild;
  title: string;
}
const PublicLayoutForm: FC<Props> = ({ children, title }) => {
  return (
    <Container fixed>
      <Paper style={{ padding: 16, width: "250px" }}>
        <Grid container direction="row" justify="center" alignItems="center">
          <h2>{title}</h2>
          <hr />
          {children}
        </Grid>
      </Paper>
    </Container>
  );
};

export default PublicLayoutForm;
