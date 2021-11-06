import type { NextPage } from "next";
import { Typography } from "antd";

const { Title } = Typography;
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <Title className={styles.redText}>Sample Title 1</Title>
      <Title className={styles.redTextImportant}>Sample Title 2</Title>
    </>
  );
};

export default Home;
