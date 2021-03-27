import React from "react";

const Error = ({ errorMessage }) => {
  return (
    <div className="errorContainer">
      <h2>Error!</h2>
      <p>{errorMessage}</p>
    </div>
  );
};

export default Error;
