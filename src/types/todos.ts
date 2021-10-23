export enum TodoActions {
  FETCH_TODOS = "FETCH_TODOS",
  FETCH_TODOS_SUCCESS = "FETCH_TODOS_SUCCESS",
  FETCH_TODOS_ERROR = "FETCH_TODOS_ERROR",
}

interface IFetchTodos {
  type: TodoActions.FETCH_TODOS;
}

interface IFetchTodosSuccess {
  type: TodoActions.FETCH_TODOS_SUCCESS;
  payload: any[];
}

interface IFetchTodosError {
  type: TodoActions.FETCH_TODOS_ERROR;
  payload: string;
}

export type ITodoAction = IFetchTodos | IFetchTodosSuccess | IFetchTodosError;

export interface ITodoState {
  loading: boolean;
  errors: string[];
  todos: ITodo[];
}

export interface ITodo {
  id: number;
  title: string;
}
