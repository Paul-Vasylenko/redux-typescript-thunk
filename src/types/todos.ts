export enum TodoActions {
  FETCH_TODOS = "FETCH_TODOS",
  FETCH_TODOS_SUCCESS = "FETCH_TODOS_SUCCESS",
  FETCH_TODOS_ERROR = "FETCH_TODOS_ERROR",
  ADD_TODO = "ADD_TODO",
}

interface IFetchTodos {
  type: TodoActions.FETCH_TODOS;
}

interface IFetchTodosSuccess {
  type: TodoActions.FETCH_TODOS_SUCCESS;
  payload: ITodo[];
}

interface IFetchTodosError {
  type: TodoActions.FETCH_TODOS_ERROR;
  payload: string;
}

interface IAddTodo {
  type: TodoActions.ADD_TODO;
  payload: ITodo;
}

export type ITodoAction =
  | IFetchTodos
  | IFetchTodosSuccess
  | IFetchTodosError
  | IAddTodo;

export interface ITodoState {
  loading: boolean;
  errors: string[];
  todos: ITodo[];
}

export interface ITodo {
  id: number;
  title: string;
  completed: boolean;
}
