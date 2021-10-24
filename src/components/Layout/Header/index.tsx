import { ReactElement } from "react";
import styles from "./styles.module.scss";

export default function Header(): ReactElement {
  return (
    <div className={styles.container}>
      <span className={styles.title}>✔&nbsp;To-Do Application&nbsp;✔</span>
    </div>
  );
}
