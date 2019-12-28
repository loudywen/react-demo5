import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { withRouter, Switch, Route, Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";

const Comp1 = ({ match, location }) => {
  console.log(match);
  console.log(location);
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
      

        <div>Comp1</div>
      </Container>
    </React.Fragment>
  );
};

export default withRouter(Comp1);
