import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import LottieHandler from "@components/feedback/LottieHandler/LottieHandler";

const Error = () => {
  return (
    <Container>
      <div
        className="d-flex flex-column align-items-center"
        style={{ marginTop: "15%" }}
      >
        <LottieHandler type="notFound" />
        <p className={styles.paragraph}>
          You might have the wrong address, or the page may have moved.
        </p>
        <Link to="/" className={styles.link} replace={true}>
          Back to Home
        </Link>
      </div>
    </Container>
  );
};

export default Error;
