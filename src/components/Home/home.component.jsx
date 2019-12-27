import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: "10px",
    display: "flex"
  },
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: "black",
    backgroundColor: "#F3E367"
  }
}));

const Home = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container className={classes.container} maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper elevation={3} className={classes.paper}>Header xs=12</Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper elevation={3} className={classes.paper}>sideNav xs=2</Paper>
          </Grid>
          <Grid item xs={10}>
            <Paper elevation={3} className={classes.paper}>Content xs=10</Paper>
          </Grid>
          
          <Grid item xs={12}>
            <Paper elevation={24} className={classes.paper}>footer xs=12</Paper>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default Home;
