import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//components
import Clock from "./Clock";
import Greeting from "./Greeting";
import Name from "./Name";
import Form from "./Form";
import TodoList from "./TodoList";
import Weather from "./Weather";
import Footer from "./Footer";

const AppRouter = ({
  name,
  setName,
  todos,
  setTodos,
  setStatus,
  filteredTodos,
}) => {
  return (
    <Router>
      {<Weather />}
      <Switch>
        {name ? (
          <Route exact path="">
            <Clock />
            <Greeting name={name} setName={setName} />
            <Form todos={todos} setTodos={setTodos} setStatus={setStatus} />
            <TodoList
              todos={todos}
              setTodos={setTodos}
              filteredTodos={filteredTodos}
            />
          </Route>
        ) : (
          <Route exact path="">
            <Clock />
            <Name name={name} setName={setName} />
          </Route>
        )}
      </Switch>
      {<Footer />}
    </Router>
  );
};

export default AppRouter;
