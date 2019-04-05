import React from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import { Grid } from "@material-ui/core";
import grey from "@material-ui/core/colors/grey";
import Course from "./Course/Course";

const styles = theme => ({
  app: {
    backgroundColor: grey["900"],
    minHeight: "100vh"
  }
});

function App(props) {
  const { classes } = props;

  return (
    <Grid
      container
      alignItems="center"
      justify="center"
      direction="column"
      className={classes.app}
    >
      <Course />
    </Grid>
  );
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);
