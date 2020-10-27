import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "../style/Form.css";

const Form = ({ todos, setTodos, setStatus }) => {
  const [inputText, setInputText] = useState("");
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };
  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([...todos, { text: inputText, completed: false, id: uuidv4() }]);
    setInputText("");
  };
  const statusHandler = (e) => {
    setStatus(e.target.value);
  };
  return (
    <form className="todo-form">
      <div className="input-button">
        <input
          value={inputText}
          onChange={inputTextHandler}
          type="text"
          placeholder="main focus today"
          className="todo-input"
        />
        <button
          onClick={submitTodoHandler}
          className="todo-button"
          type="submit"
        >
          <i className="fas fa-plus-square"></i>
        </button>
      </div>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
