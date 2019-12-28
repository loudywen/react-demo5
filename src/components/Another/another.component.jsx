import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { withRouter, Switch, Route, Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Comp1 from "../Route/testRoute.component";

const Another = ({ match, location }) => {
  console.log(match);
  console.log(location);
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Typography variant="h1">React Router Dom</Typography>

        <nav>
          <ul>
            <li>
              <Link to={`${match.path}/comp1`}>comp1</Link>
            </li>
            <li>
              <Link to={`${match.path}/comp2`}>comp2</Link>
            </li>
          </ul>
        </nav>

        <div>
          <Switch>
            <Route exact path={`${match.path}/comp1`}>
              <Comp1 />
            </Route>
            <Route exact path={`${match.path}/comp2`}>
              <Comp2 />
            </Route>
            <Route component={NotFound} />
          </Switch>
        </div>
      </Container>
    </React.Fragment>
  );
};
const NotFound = () => {
  return <div>Not found</div>;
};

const Comp2 = () => (
  <Container maxWidth="lg">
    <div>Comp2</div>
  </Container>
);
export default withRouter(Another);
