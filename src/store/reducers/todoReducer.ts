import { ITodoState, ITodoAction, TodoActions } from "../../types/todos";

const initialState: ITodoState = {
  loading: false,
  errors: [],
  todos: [],
};

export const todoReducer = (
  state = initialState,
  action: ITodoAction
): ITodoState => {
  switch (action.type) {
    case TodoActions.FETCH_TODOS:
      return { ...state, loading: true };
    case TodoActions.FETCH_TODOS_SUCCESS:
      return { ...state, loading: false, todos: action.payload };
    case TodoActions.FETCH_TODOS_ERROR:
      return { ...state, loading: false, errors: [action.payload] };
    case TodoActions.ADD_TODO:
      return { ...state, todos: [action.payload, ...state.todos] };
    default:
      return state;
  }
};
