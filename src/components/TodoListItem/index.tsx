import { ReactElement } from "react";
import styles from "./styles.module.scss";

interface Props {
  item: string;
}

export default function TodoListItem({ item }: Props): ReactElement {
  return <div className={styles.container}>{item}</div>;
}
