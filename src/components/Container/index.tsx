import { ReactElement, ReactNode } from "react";
import { getCurrentDay } from "../../utils/helpers";
import Emoji from "../Emoji";
import styles from "./styles.module.scss";

interface Props {
  children: ReactNode;
}

export default function Container({ children }: Props): ReactElement {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.title}>{getCurrentDay()}</div>
        <Emoji />
      </div>
      <div className={styles.body}>{children}</div>
      <div></div>
    </div>
  );
}
