import styles from "./NotFound.module.css";

const NotFound = () => {
  return (
    <div className={styles.notFoundContainer}>
      <h1 className={styles.notFound}>404</h1>
      <p className={styles.message}>Page Not Found</p>
      <p className={styles.suggestion}>
        Please check the URL or return to the homepage.
      </p>
    </div>
  );
};

export default NotFound;
