import React, { useState } from "react";
import config from "../../config";
import FadeLesson from "../FadeLesson/FadeLesson";

function Course(props) {
  const [index, setIndex] = useState(0);

  const nextScene = () => {
    setTimeout(() => {
      setIndex(index + 1);
    }, config.fadeTimer);
  };

  return <FadeLesson index={index} nextLesson={() => nextScene()} />;
}

export default Course;
