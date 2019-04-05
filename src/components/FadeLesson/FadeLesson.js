import React, { useState, useEffect } from "react";
import { Fade } from "@material-ui/core";
import config from "../../config";
import Start from "../Start/Start";
import Intro from "../Intro/Intro";
import Breaths from "../Breaths/Breaths";

function FadeLesson(props) {
  const [visible, setVisible] = useState(true);
  const { index, nextLesson } = props;

  useEffect(() => {
    setVisible(true);
  }, [index]);

  const next = () => {
    setVisible(false);
    nextLesson();
  };

  const getCurrentScene = () => {
    const defaultNext = () => next();

    /**
     * Ideas for next units:
     * ---No matter what your situation is, things will get better
     * ---If you are overwhelmed, take that tornado of thoughts in your head and try to figure out what the first thing you can do is, and take it one step at a time
     * Don't focus on everything that is troubling you, and instead find ONE thing you can do to move forward
     * Completely distract yourself in that one thing, until its time for the next thing
     * One step at a time
     * ---Make sure you get good rest, it is important for so many reasons
     * ---Stay hydrated, and make sure you are eating enough
     * ---Write down your thoughts, get it out of your head and onto paper
     * ---Clean your room or something, this always helps clear your mind
     * ---Is there anyone you can talk to that you trust? Or just someone you can call to get your mind off of whatever is bogging you down?
     * 
     */

    switch (index) {
      case 0:
        return <Start next={defaultNext} />;
      case 1:
        return <Intro next={defaultNext} />;
      case 2:
        return <Breaths next={defaultNext} />;
      default:
        alert("woops");
    }
  };

  return (
    <Fade in={visible} timeout={config.fadeTimer}>
      {getCurrentScene()}
    </Fade>
  );
}

export default FadeLesson;
