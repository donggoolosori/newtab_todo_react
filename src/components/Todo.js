import React from "react";
import "../style/Todo.css";

const Todo = ({ todo, todos, setTodos, filteredTodos }) => {
  // handle complete button click
  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };
  // handle delete button click
  const deleteHandler = () => {
    setTodos(todos.filter((item) => item.id !== todo.id));
  };
  return (
    <div className={`todo ${todo.completed ? "completed" : ""}`}>
      <li className={"todo-item"}>{todo.text}</li>
      <button onClick={completeHandler} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
