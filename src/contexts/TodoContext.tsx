import {
  createContext,
  useState,
  useContext,
  ReactElement,
  ReactNode,
} from "react";

import { emojis } from "../utils/emojis";
import { getRandom } from "../utils/helpers";

interface TodoContextState {
  todoItems: string[];
  addTodoItem: (name: string) => void;
  removeTodoItem: (idx: number) => void;
  removeAll: () => void;
  updateTodoItem: (idx: number, data: string) => void;
  emoji: string;
}

interface Props {
  children: ReactNode;
}

const contextDefaultValues: TodoContextState = {
  todoItems: ["Add CRUD operations to Todo Context."],
  addTodoItem: () => {},
  removeTodoItem: () => {},
  removeAll: () => {},
  updateTodoItem: () => {},
  emoji: emojis[getRandom(emojis.length)], // select randomly from emojis
};

// created context with default values
const TodoContext = createContext<TodoContextState>(contextDefaultValues);

export const TodoProvider = ({ children }: Props): ReactElement => {
  const [todoItems, setTodoItems] = useState<string[]>(
    contextDefaultValues.todoItems
  );
  const [emoji] = useState(contextDefaultValues.emoji);

  const addTodoItem = (newTodoItem: string) =>
    setTodoItems((todoItems) => [...todoItems, newTodoItem]);

  const removeTodoItem = (idx: number) => {
    const data = todoItems;
    if (!data[idx]) {
      alert("No task found in here!");
      return;
    }
    data.splice(idx, 1);
    setTodoItems([...data]);
  };

  const removeAll = () =>
    todoItems.length === 0
      ? alert("There is no task in the list!")
      : setTodoItems([]);

  const updateTodoItem = (idx: number, item: string) => {
    const data = todoItems;
    data[idx] = item;
    setTodoItems([...data]);
  };

  const values = {
    todoItems,
    addTodoItem,
    removeTodoItem,
    removeAll,
    updateTodoItem,
    emoji,
  };

  return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>;
};

// created custom hook
export const useTodo = () => useContext(TodoContext);
