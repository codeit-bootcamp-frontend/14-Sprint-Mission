import { ErrorBoundary } from "react-error-boundary";
import ErrorMessage from "./ErrorMessage";

const MyErrorBoundary = ({ children }) => {
  return (
    <ErrorBoundary
      fallbackRender={({ error, resetErrorBoundary }) => (
        <ErrorMessage error={error} onRetry={resetErrorBoundary} />
      )}
    >
      {children}
    </ErrorBoundary>
  );
};

export default MyErrorBoundary;
