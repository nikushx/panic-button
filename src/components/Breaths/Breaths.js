import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { withStyles, Typography, LinearProgress } from "@material-ui/core";
import grey from "@material-ui/core/colors/grey";

const styles = theme => ({
  message: {
    color: grey[50]
  },
  progress: {
    width: '70vw'
  }
});

function Two(props) {
  const [progress, setProgress] = useState(0);
  const { classes, style, next } = props;

  useEffect( () => {
    if ( progress < 100 ) {
      setTimeout( () => setProgress( progress + 5 ), 1400 );
    } else {
      next();
    }
  } );

  return (
    <>
      <Typography
        className={classes.message}
        variant="h5"
        style={style}
        paragraph
        align="center"
      >
        Take a few deep breaths. Feel it in your stomach.
      </Typography>
      <LinearProgress style={style} className={classes.progress} variant="determinate" value={progress} />
    </>
  );
}

Two.propTypes = {
  classes: PropTypes.object.isRequired,
  index: PropTypes.number
};

export default withStyles(styles)(Two);
