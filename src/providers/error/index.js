import React, { createContext, useState } from "react";

const initialState = {
  errorMessage: null,
};

export const ErrorContext = createContext({
  state: { ...initialState },
  setErrorMessage: () => {},
});

const ErrorProvider = ({ children }) => {
  const [errorMessage, setErrorMessage] = useState(initialState.errorMessage);

  const value = {
    state: { errorMessage },
    setErrorMessage,
  };

  return (
    <ErrorContext.Provider value={value}>{children}</ErrorContext.Provider>
  );
};

export default ErrorProvider;
