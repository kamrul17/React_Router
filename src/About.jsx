import React from "react";
import { useNavigate } from "react-router-dom";
function About() {
  const gotonavi = () => {
    const id = 10;
    // navigate("/naviPage");
    // we can also pass value with in navigate
    navigate("/naviPage", { state: { id: id } });
  };
  const navigate = useNavigate();
  return (
    <>
      <h1>About</h1>
      <button onClick={gotonavi}>gotoNavigatedPage</button>
    </>
  );
}

export default About;
