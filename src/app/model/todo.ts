export interface Todo {
  id: string;
  title: string;
}

export interface BoardColumn {
  title: string;
  tasks: Todo[]
}
