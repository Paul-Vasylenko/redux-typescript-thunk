import React, { useEffect, useState } from "react";
import "./App.css";
import { useActions, useAppSelector } from "./hooks/redux-hooks";
import { Todo } from "./Todo";

function App() {
  const { loading, errors, todos } = useAppSelector((store) => store.todos);
  const { fetchTodos, AddTodoAction } = useActions();
  const [title, setTitle] = useState("");
  useEffect(() => {
    fetchTodos();
  }, []); //fetchTodos should NOT be included into dependencies. It occurs errors!
  const handleAdd = () => {
    AddTodoAction({
      id: Math.ceil(Math.random() * 1000),
      title,
      completed: false,
    });
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
            <Todo todo={todo} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
