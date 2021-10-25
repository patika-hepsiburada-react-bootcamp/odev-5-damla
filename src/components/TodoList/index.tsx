import { ReactElement, useState } from "react";
import TodoListItem from "../TodoListItem";
import styles from "./styles.module.scss";
import { useTodo } from "../../contexts/TodoContext";
import { nanoid } from "nanoid";

export default function TodoList(): ReactElement {
  const [task, setTask] = useState("");
  const { todoItems, addTodoItem, removeTodoItem, removeAll, updateTodoItem } =
    useTodo();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // TODO: check if it is empty
    setTask(event.target.value);
  };

  const handleSubmit = () => {
    addTodoItem({ id: nanoid(), value: task, done: false });
    setTask("");
  };

  return (
    <>
      <li className={styles.container}>
        <div className={styles.add}>
          <input
            type="text"
            id="input"
            className={styles.field}
            value={task}
            placeholder="Enter a task to do"
            onChange={handleChange}
          />
          <input
            className={styles.submit}
            type="submit"
            value="➕"
            onClick={handleSubmit}
          />
        </div>
        {todoItems.map((item, i) => (
          <TodoListItem key={i} item={item} />
        ))}
      </li>
      <button onClick={() => removeTodoItem("1")}>Remove 1</button>
      <button
        onClick={() =>
          updateTodoItem("1", { id: "1", value: "test task", done: true })
        }
      >
        Update
      </button>
      <button
        onClick={() =>
          addTodoItem({ id: nanoid(), value: "test task", done: false })
        }
      >
        Add
      </button>
      <button onClick={removeAll}>Reset</button>
    </>
  );
}
