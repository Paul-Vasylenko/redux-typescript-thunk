import React, { useEffect } from "react";
import "./App.css";
import { useActions, useAppSelector } from "./hooks/redux-hooks";

function App() {
  const { loading, errors, todos } = useAppSelector((store) => store.todos);
  const { fetchTodos } = useActions();
  useEffect(() => {
    fetchTodos();
  }, []); //fetchTodos should be included into dependencies. It occurs errors!

  if (errors.length > 0) {
    return <div>{errors.join("\n")}</div>;
  }
  return loading ? (
    <div>Loading...</div>
  ) : (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          {todo.id} &gt; {todo.title}
        </div>
      ))}
    </div>
  );
}

export default App;
