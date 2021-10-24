import { Dispatch } from "redux";
import { ITodo, ITodoAction, TodoActions } from "../../types/todos";

const FetchTodosAction = (): ITodoAction => ({
  type: TodoActions.FETCH_TODOS,
});

const FetchTodosSuccessAction = (todos: ITodo[]): ITodoAction => ({
  type: TodoActions.FETCH_TODOS_SUCCESS,
  payload: todos,
});

const FetchTodosErrorAction = (error: string): ITodoAction => ({
  type: TodoActions.FETCH_TODOS_ERROR,
  payload: error,
});

export const AddTodoAction = (todo: ITodo): ITodoAction => ({
  type: TodoActions.ADD_TODO,
  payload: todo,
});

export const fetchTodos = () => {
  return async (dispatch: Dispatch<ITodoAction>) => {
    dispatch(FetchTodosAction());
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then((res) => res.json())
      .then((res) => dispatch(FetchTodosSuccessAction(res)))
      .catch((err: Error) => dispatch(FetchTodosErrorAction(err.message)));
  };
};
