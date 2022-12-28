import React, { useEffect, useState } from "react";
import TodoItems from "./TodoItem";

function Todo() {
  const [toDo, setTodo] = useState("");
  const [toDoList, setToDoList] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setToDoList(data));
     
  }, []);

  function submitHandler(event) {
    event.preventDefault();
    setTodo("");
    setToDoList([...toDoList, toDo]);
  }

  return (
    <>
      <form onSubmit={submitHandler}>
        <button>Add Todo</button>
      </form>

      {toDoList.map((data) => {
        return <TodoItems key={Math.random()} id={data.id} title ={data.title} />;
      })}
    </>
  );
}

export default Todo;
  