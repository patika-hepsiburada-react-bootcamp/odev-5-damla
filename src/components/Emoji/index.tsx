import { ReactElement } from "react";
import { useTodo } from "../../contexts/TodoContext";
import styles from "./styles.module.scss";

export default function Emoji(): ReactElement {
  const { emoji } = useTodo();

  return <div className={styles.container}>{emoji}</div>;
}
