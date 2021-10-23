import { applyMiddleware, combineReducers, createStore } from "redux";
import { todoReducer } from "./reducers/todoReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  todos: todoReducer,
});

export type IRootState = ReturnType<typeof rootReducer>;

export default createStore(rootReducer, applyMiddleware(thunk));
