import {
  createContext,
  useState,
  useContext,
  ReactElement,
  ReactNode,
} from "react";
import { TodoItem, TodoContextState } from "../interfaces";
import { emojis } from "../utils/emojis";
import { getRandom } from "../utils/helpers";
import { nanoid } from "nanoid";

interface Props {
  children: ReactNode;
}

// set default values for initializing
const contextDefaultValues: TodoContextState = {
  todoItems: [
    {
      id: "1",
      value: "Implement CRUD processes.",
      done: true,
    },
  ],
  addTodoItem: () => {},
  removeTodoItem: () => {},
  removeAll: () => {},
  updateTodoItem: () => {},
  emoji: emojis[getRandom(emojis.length)], // select randomly from emojis list
};

// created context with default values
const TodoContext = createContext<TodoContextState>(contextDefaultValues);

export const TodoProvider = ({ children }: Props): ReactElement => {
  // set default values
  const [todoItems, setTodoItems] = useState<TodoItem[]>(
    contextDefaultValues.todoItems
  );
  const [emoji] = useState(contextDefaultValues.emoji);

  const addTodoItem = (newTodoItem: TodoItem) =>
    // add item with new id generated
    setTodoItems((todoItems) => [
      ...todoItems,
      { ...newTodoItem, id: nanoid() },
    ]);

  // remove item by using id value
  const removeTodoItem = (id: string) => {
    const data = todoItems;

    // find the item's index to remove it
    const index = data.findIndex((todoItem) => todoItem.id === id);

    // to check if the item exist in the list
    if (index < 0) {
      alert("No item found in the list");
      return;
    }

    // splice value found in the index
    data.splice(index, 1);

    // data list will be changed because we are editing on the reference. Therefore, it is enough
    // to spread data values
    setTodoItems([...data]);
  };

  // Firstly, check if there any value exists in the list.
  // If does exist, set todo items list to an empty array otherwise, give alert to inform user.
  const removeAll = () =>
    todoItems.length === 0
      ? alert("There are no tasks found in the list!")
      : setTodoItems([]);

  // Update item with id and item values.
  const updateTodoItem = (id: string, item: TodoItem) => {
    const data = todoItems;
    const index = data.findIndex((todoItem) => todoItem.id === id);
    data[index] = item;
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

  // add values to provider to reach them out from another component
  return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>;
};

// created custom hook
export const useTodo = () => useContext(TodoContext);
