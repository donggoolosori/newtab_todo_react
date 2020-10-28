import React from "react";
import Todo from "./Todo";
import "../style/TodoList.css";

const TodoList = ({ todos, setTodos, filteredTodos }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            todos={todos}
            setTodos={setTodos}
            filteredTodos={filteredTodos}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
