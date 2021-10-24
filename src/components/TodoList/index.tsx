import { ReactElement } from "react";
import TodoListItem from "../TodoListItem";
import styles from "./styles.module.scss";
import { useTodo } from "../../contexts/TodoContext";

export default function TodoList(): ReactElement {
  const { todoItems, addTodoItem, removeTodoItem, removeAll, updateTodoItem } =
    useTodo();

  return (
    <>
      <li className={styles.container}>
        {todoItems.map((item, i) => (
          <TodoListItem key={i} item={item} />
        ))}
      </li>
      <button onClick={() => removeTodoItem(1)}>Remove 1</button>
      <button onClick={() => updateTodoItem(1, "update edildi.")}>
        Update
      </button>
      <button onClick={() => addTodoItem("test")}>Add</button>
      <button onClick={removeAll}>Reset</button>
    </>
  );
}
