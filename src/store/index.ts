import { applyMiddleware, combineReducers, createStore } from "redux";
import { todoReducer } from "./reducers/todoReducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  todos: todoReducer,
});

export type IRootState = ReturnType<typeof rootReducer>;

export default createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
