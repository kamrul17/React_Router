import React from "react";
import { useLocation } from "react-router-dom";

function NavigatedExmPage() {
  const locate = useLocation();
  return <div>NavigatedExmPage and id is {locate.state.id}</div>;
}

export default NavigatedExmPage;
