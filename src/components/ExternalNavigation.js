import React from "react";

function ExternalNavigation({ props }) {
  window.location.href = props;
  return null;
}

export default ExternalNavigation;
