import React, { useState } from "react";
import { ITodo } from "./types/todos";

interface ITodoProps {
  todo: ITodo;
}

export const Todo: React.FC<ITodoProps> = ({ todo }) => {
  const [checked, setChecked] = useState(todo.completed);
  return (
    <div className="todo">
      {todo.id}: {todo.title}{" "}
      <input
        type="checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
    </div>
  );
};
