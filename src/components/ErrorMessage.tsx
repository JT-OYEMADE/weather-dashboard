import React from "react";

interface ErrorMessageProps {
  error: string | null;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ error }) => {
  return error ? <p className="text-red-500 p-4">{error}</p> : null;
};

export default ErrorMessage;
