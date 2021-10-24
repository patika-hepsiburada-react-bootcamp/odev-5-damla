import { ReactElement } from "react";
import styles from "./styles.module.scss";

export default function Footer(): ReactElement {
  return (
    <div className={styles.container}>
      <span>Made with ❤️&nbsp;&nbsp;by&nbsp;</span>
      <a
        href="https://github.com/damla"
        rel="noopener noreferrer"
        target="_blank"
        className={styles.link}
      >
        damla
      </a>
    </div>
  );
}
