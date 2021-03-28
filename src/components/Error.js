import React from "react";

import { useErrorMessage } from "../providers/error/hooks";

const Error = () => {
  const [errorMessage, setErrorMessage] = useErrorMessage();

  const handleClose = () => {
    setErrorMessage(null);
  };

  if (!errorMessage) {
    return null;
  }

  return (
    <div className="errorContainer">
      <button className="close" onClick={handleClose}>
        x
      </button>
      <h2>Error!</h2>
      <p>{errorMessage}</p>
    </div>
  );
};

export default Error;
