import { Container } from "react-bootstrap";
import { Header, Footer } from "@components/common";

import style from "./styles.module.css";
import { Outlet } from "react-router-dom";

const { container, wrapper } = style;
const MainLayout = () => {
  return (
    <Container className={container}>
      <Header />
      <div className={wrapper}>
        <Outlet />
      </div>
      <Footer />
    </Container>
  );
};

export default MainLayout;
