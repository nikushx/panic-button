import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { withStyles, Typography } from "@material-ui/core";
import grey from "@material-ui/core/colors/grey";

const styles = theme => ({
  message: {
    color: grey[50]
  }
});

function One(props) {
  const { classes, style, next } = props;

  useEffect(() => {
      setTimeout( () => {
        next();
      }, 7000 )
  }, []);

  return (
    <Typography
      className={classes.message}
      variant="h5"
      style={style}
      align="center"
    >
      Follow along, let's walk through this together.
    </Typography>
  );
}

One.propTypes = {
  classes: PropTypes.object.isRequired,
  index: PropTypes.number
};

export default withStyles(styles)(One);
