import React, { useEffect, useState } from "react";
import "./App.css";
import { useActions, useAppSelector } from "./hooks/redux-hooks";

function App() {
  const { loading, errors, todos } = useAppSelector((store) => store.todos);
  const { fetchTodos, AddTodoAction } = useActions();
  const [title, setTitle] = useState("");
  useEffect(() => {
    fetchTodos();
  }, []); //fetchTodos should NOT be included into dependencies. It occurs errors!
  const handleAdd = () => {
    AddTodoAction({ id: Math.ceil(Math.random() * 1000), title });
    setTitle("");
  };
  if (errors.length > 0) {
    return <div>{errors.join("\n")}</div>;
  }
  return (
    <div>
      <input
        type="text"
        placeholder="input todo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input type="submit" onClick={handleAdd} />
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {todos.map((todo) => (
            <div key={todo.id}>
              {todo.id} &gt; {todo.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
