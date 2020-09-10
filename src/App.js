import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  //STATE STUFF
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filtredTodos, setFiltredTodos] = useState([]);

  //FUNCTIONS

  const FileterHandler = () => {
    switch (status) {
      case "completed":
        setFiltredTodos(todos.filter((todo) => todo.completed === true));
        break;

      case "uncompleted":
        setFiltredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFiltredTodos(todos);
    }
    console.log(filtredTodos);
    return filtredTodos;
  };

  //LOCAL SOTRAGE (REFRESH) when the app start
  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    FileterHandler();
    saveTodos();
  }, [todos, status]);

  //SAVE TO LOCALSOTRAGE
  const saveTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  //GET LOCAL TODOS
  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todosSotrage = JSON.parse(localStorage.getItem("todos"));
      setTodos(todosSotrage);
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Ala's todo list {inputText}</h1>
      </header>
      <Form
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
        setStatus={setStatus}
        setFiltredTodos={setFiltredTodos}
      />
      <TodoList todos={todos} setTodos={setTodos} filtredTodos={filtredTodos} />
    </div>
  );
}

export default App;
