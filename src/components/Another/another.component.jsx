import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { withRouter, Switch, Route, Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";

const Another = ({ match }) => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Typography variant="h1">React Router Dom</Typography>

        <nav>
          <ul>
            <li>
              <Link to={`${match.url}/comp1`}>comp1</Link>
            </li>
            <li>
              <Link to={`${match.url}/comp2`}>comp2</Link>
            </li>
          </ul>
        </nav>

        <div>
          <Switch>
            <Route  exact path={`${match.url}/comp1`}>
              <Comp1 />
            </Route>
            <Route  exact path={`${match.url}/comp2`}>
              <Comp2 />
            </Route>
          </Switch>
        </div>
      </Container>
    </React.Fragment>
  );
};

const Comp1 = () => <div>Comp1</div>;
const Comp2 = () => <div>Comp2</div>;
export default withRouter(Another);
