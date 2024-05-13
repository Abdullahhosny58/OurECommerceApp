import { Container } from "react-bootstrap";
import { Link, useRouteError, isRouteErrorResponse } from "react-router-dom";
import styles from "./styles.module.css";

const Error = () => {
  const error = useRouteError();
  let errorStatus: number;
  let errorStatusText: string;

  if (isRouteErrorResponse(error)) {
    errorStatus = error.status;
    errorStatusText = error.statusText;
  } else {
    errorStatus = 404;
    errorStatusText = "Page Not Found";
  }

  return (
    <Container className={styles.container}>
      <h1 className={styles.heading}>{errorStatus}</h1>
      <p className={styles.paragraph}>{errorStatusText}</p>
      <p className={styles.paragraph}>
        You might have the wrong address, or the page may have moved.
      </p>
      <Link to="/" className={styles.link} replace={true}>
        Back to Home
      </Link>
    </Container>
  );
};

export default Error;
