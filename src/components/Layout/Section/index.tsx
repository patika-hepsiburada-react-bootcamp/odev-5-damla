import { ReactElement, ReactNode } from "react";
import styles from "./styles.module.scss";

interface Props {
  children: ReactNode;
}

export default function Section({ children }: Props): ReactElement {
  return <div className={styles.container}>{children}</div>;
}
