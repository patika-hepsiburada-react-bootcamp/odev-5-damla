import { ReactElement, ReactNode } from "react";
import { getCurrentDay } from "../../utils/helpers";
import Button from "../Button";
import Emoji from "../Emoji";
import styles from "./styles.module.scss";
import { useTodo } from "../../contexts/TodoContext";

interface Props {
  children: ReactNode;
}

export default function Container({ children }: Props): ReactElement {
  const { removeAll } = useTodo();
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.title}>{getCurrentDay()}</div>
        <Emoji />
      </div>
      <div className={styles.body}>{children}</div>
      <div className={styles.footer}>
        <Button onClick={removeAll} text="🗑" type="removeAll" />
      </div>
    </div>
  );
}
