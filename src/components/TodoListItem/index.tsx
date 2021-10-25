import { ReactElement, useState } from "react";
import styles from "./styles.module.scss";
import { TodoItem } from "../../interfaces";
import { useTodo } from "../../contexts/TodoContext";
import classNames from "classnames";
import Button from "../Button";

interface Props {
  item: TodoItem;
}

export default function TodoListItem({ item }: Props): ReactElement {
  const [update, setUpdate] = useState(false);
  const [task, setTask] = useState("");
  const { updateTodoItem, removeTodoItem } = useTodo();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // TODO: check if it is empty
    setTask(event.target.value);
  };

  const handleSubmit = () => {
    updateTodoItem(item.id, {
      id: item.id,
      value: task,
      done: item.done,
    });

    setTask("");
    setUpdate(false);
  };

  const onValueChange = (): void => {
    updateTodoItem(item.id, {
      id: item.id,
      value: item.value,
      done: !item.done,
    });
  };

  return (
    <div className={styles.container}>
      <div
        className={styles.left}
        style={{ marginRight: update ? "5px" : "1rem" }}
      >
        {update ? (
          <div className={styles.update}>
            <input
              type="text"
              id="input"
              className={styles.field}
              value={task}
              placeholder="Update the task"
              onChange={handleChange}
            />
            <input
              className={styles.submit}
              type="submit"
              value="✏️"
              onClick={handleSubmit}
            />
          </div>
        ) : (
          <>
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
          </>
        )}
      </div>

      {!update && (
        <Button onClick={() => setUpdate(true)} text="♻️" type="update" />
      )}
      <Button onClick={() => removeTodoItem(item.id)} text="❌" type="remove" />
    </div>
  );
}
