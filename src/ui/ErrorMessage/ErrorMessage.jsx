import styles from "./ErrorMessage.module.css";

function ErrorMessage({ message, onClick }) {
  return (
    <div className={styles.errorMessage}>
      <h2>Something went wrong:</h2>
      <p>{message}</p>
      <span>😥</span>

      <p>Try refreshing the page</p>
      <button onClick={onClick}>Refresh</button>
    </div>
  );
}

export default ErrorMessage;
