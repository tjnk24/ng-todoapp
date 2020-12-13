export type TodoItem = {
  id: number;
  text: string;
}

export type Todos = {
  current: TodoItem[];
  completed: TodoItem[];
}