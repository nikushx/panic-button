import React from "react";
import { Fab, withStyles } from "@material-ui/core";
import PropTypes from "prop-types";

const styles = theme => ({
  button: {
    textTransform: "none"
  }
});

function Start(props) {
  const { classes, next, style } = props;

  return (
    <Fab
      style={style}
      className={classes.button}
      onClick={() => next()}
      variant="extended"
      color="primary"
      size="large"
    >
      If you are not okay, click here.
    </Fab>
  );
}

Start.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Start);
