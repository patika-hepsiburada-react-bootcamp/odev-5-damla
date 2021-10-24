import {
  createContext,
  useState,
  useContext,
  ReactElement,
  ReactNode,
} from "react";

import { emojis } from "../utils/emojis";
import { getRandom } from "../utils/helpers";

interface TodosContextState {
  todos: string[];
  addTodo: (name: string) => void;
  emoji: string;
}

interface Props {
  children: ReactNode;
}

const contextDefaultValues: TodosContextState = {
  todos: [],
  addTodo: () => {},
  emoji: emojis[getRandom(emojis.length)], // select randomly from emojis
};

// created context with default values
const TodoContext = createContext<TodosContextState>(contextDefaultValues);

export const TodoProvider = ({ children }: Props): ReactElement => {
  const [todos, setTodos] = useState<string[]>(contextDefaultValues.todos);
  const [emoji] = useState(contextDefaultValues.emoji);

  const addTodo = (newTodo: string) => setTodos((todos) => [...todos, newTodo]);

  const values = {
    todos,
    setTodos,
    addTodo,
    emoji,
  };

  return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>;
};

// created custom hook
export const useTodos = () => useContext(TodoContext);
