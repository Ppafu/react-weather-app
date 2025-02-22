import styles from "./ErrorFallback.module.css";
import Box from "../../ui/Box/Box";
import ErrorMessage from "../../ui/ErrorMessage/ErrorMessage";

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div className={styles.errorFallbackGrid}>
      <Box>
        <ErrorMessage messsge={error.message} onClick={resetErrorBoundary} />
      </Box>
    </div>
  );
}

export default ErrorFallback;
