import { ReactElement } from "react";
import styles from "./styles.module.scss";
import { TodoItem } from "../../interfaces";
import { useTodo } from "../../contexts/TodoContext";
import classNames from "classnames";

interface Props {
  item: TodoItem;
}

export default function TodoListItem({ item }: Props): ReactElement {
  const { updateTodoItem } = useTodo();

  const onValueChange = (): void => {
    updateTodoItem(item.id, {
      id: item.id,
      value: item.value,
      done: !item.done,
    });
  };

  return (
    <div className={styles.container}>
      <input
        className={styles.cb}
        type="checkbox"
        name="isDone"
        checked={item.done}
        onChange={onValueChange}
      />
      <p className={classNames(item.done ? styles.done : styles.notDone)}>
        {item.value}
      </p>
    </div>
  );
}
