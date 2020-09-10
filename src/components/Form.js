import React from "react";

const Form = ({ inputText, setInputText, todos, setTodos, setStatus }) => {
  const inputTextHundler = (e) => {
    // console.log(e.target.value);
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { id: Math.random() * 1000, text: inputText, completed: false },
    ]);
    setInputText("");
  };

  //FILTER
  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  return (
    <form>
      <input type="text" className="todo-input" onChange={inputTextHundler} />
      <button className="todo-button" type="submit" onClick={submitTodoHandler}>
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" className="filter-todo" onChange={statusHandler}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;