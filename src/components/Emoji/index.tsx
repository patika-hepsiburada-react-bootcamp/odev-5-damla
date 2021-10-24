import { ReactElement } from "react";
import { useTodos } from "../../contexts/TodoContext";
import styles from "./styles.module.scss";

export default function Emoji(): ReactElement {
  const { emoji } = useTodos();

  return <div className={styles.container}>{emoji}</div>;
}
