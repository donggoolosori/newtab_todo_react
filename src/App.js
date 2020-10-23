import React, { useEffect, useState } from "react";
import "./App.css";
//components
import Clock from "./components/Clock";
import Greeting from "./components/Greeting";
import Name from "./components/Name";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

const localName = "userName";
const localTodos = "todos";

function App() {
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
    <div className="App">
      <Name name={name} setName={setName} />
      <Clock />
      <Greeting name={name} />
      <Form todos={todos} setTodos={setTodos} setStatus={setStatus} />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
