import React, { useEffect, useState } from "react";
import "./App.css";
import AppRouter from "./components/Router";
// 이미지 로드
import bg1 from "./assets/img/1.jpg";
import bg2 from "./assets/img/2.jpg";
import bg3 from "./assets/img/3.jpg";
import bg4 from "./assets/img/4.jpg";
import bg5 from "./assets/img/5.jpg";
import bg6 from "./assets/img/6.jpg";
import bg7 from "./assets/img/7.jpg";
import bg8 from "./assets/img/8.jpg";
import bg9 from "./assets/img/9.jpg";
import bg10 from "./assets/img/10.jpg";
import bg11 from "./assets/img/11.jpg";

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
    // write background image
    const getRandomImage = () => {
      const imgNum = 10;
      const randomNum = Math.ceil(Math.random() * imgNum);
      switch (randomNum) {
        case 1:
          return bg1;
        case 2:
          return bg2;
        case 3:
          return bg3;
        case 4:
          return bg4;
        case 5:
          return bg5;
        case 6:
          return bg6;
        case 7:
          return bg7;
        case 8:
          return bg8;
        case 9:
          return bg9;
        case 10:
          return bg10;
        case 11:
          return bg11;
        default:
          return bg1;
      }
    };
    const bgImage = () => {
      const body = document.querySelector("body");
      const image = new Image();
      image.src = getRandomImage();
      image.classList.add("bgImage");
      body.prepend(image);
    };
    getLocalName();
    getLocalTodos();
    bgImage();
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
