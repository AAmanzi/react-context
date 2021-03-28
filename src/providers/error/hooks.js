import { useContext } from "react";
import { ErrorContext } from ".";

const useErrorContext = () => {
  return useContext(ErrorContext);
};

export const useErrorMessage = () => {
  const {
    state: { errorMessage },
    setErrorMessage,
  } = useErrorContext();

  return [errorMessage, setErrorMessage];
};
