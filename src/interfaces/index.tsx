export interface TodoItem {
  id: string;
  value: string;
  done: boolean;
}

export interface TodoContextState {
  todoItems: TodoItem[];
  addTodoItem: (newTodoItem: TodoItem) => void;
  removeTodoItem: (id: string) => void;
  removeAll: () => void;
  updateTodoItem: (id: string, data: TodoItem) => void;
  emoji: string;
}
