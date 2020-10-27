import React, { useEffect, useState } from "react";
import "./App.css";

import AppRouter from "./components/Router";

const localName = "userName";
const localTodos = "todos";

const App = () => {
  //Use States
  const [name, setName] = useState("");
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [status, setStatus] = useState("all");

  //Use Effect
  // Run Once at Start
  useEffect(() => {
    // load localstorage name
    const getLocalName = () => {
      if (localStorage.getItem(localName) !== null) {
        setName(localStorage.getItem(localName));
      }
    };
    // load localstorage todos
    const getLocalTodos = () => {
      if (localStorage.getItem(localTodos) === null) {
        localStorage.setItem(localTodos, JSON.stringify([]));
      } else {
        setTodos(JSON.parse(localStorage.getItem(localTodos)));
      }
    };
    getLocalName();
    getLocalTodos();
  }, []);
  // Name Change
  useEffect(() => {
    const saveLocalName = () => {
      localStorage.setItem(localName, name);
    };
    saveLocalName();
  }, [name]);
  // todos, status change
  useEffect(() => {
    const filterHandler = () => {
      switch (status) {
        case "completed":
          setFilteredTodos(todos.filter((todo) => todo.completed === true));
          break;
        case "uncompleted":
          setFilteredTodos(todos.filter((todo) => todo.completed === false));
          break;
        default:
          setFilteredTodos(todos);
          break;
      }
    };
    const saveLocalTodos = () => {
      localStorage.setItem("todos", JSON.stringify(todos));
    };
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);
  return (
    <AppRouter
      name={name}
      setName={setName}
      todos={todos}
      setTodos={setTodos}
      filteredTodos={filteredTodos}
      setStatus={setStatus}
    />
  );
};

export default App;
