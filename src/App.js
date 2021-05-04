import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import AddTodo from "./components/AddTodo";
import TodoListItem from "./components/TodoListItem";

export default function App() {
  const addTodoItem = (title, desc) => {
    console.log(desc, title);

    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const mytodo = {
      sno: sno,
      title: title,
      desc: desc
    };

    console.log(mytodo);

    setTodos([...todos, mytodo]);
  };

  const onDelete = (todo) => {
    console.log("I am on delete" + todo);

    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
  };
  let initTodo;

  if (localStorage.getItem("todos") === null) {
    initTodo = [
      {
        sno: 1,
        title: "Listening",
        desc: "You will be become a billionaire at the age of 21"
      },
      {
        sno: 2,
        title: "Believe",
        desc:
          " YOu mustlbe in believe, You will be become a billionaire at the age of 21"
      },
      {
        sno: 3,
        title: "Thinking",
        desc:
          "Thinking is the most important, You will be become a billionaire at the age of 21"
      }
    ];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Router>
        <Navbar searchBar={false} title="To Do List" />
        <div className="container my-5">
          <h3 className="my-3"> Add To Do </h3>
          <AddTodo addTodoItem={addTodoItem} />
          <hr className="my-5" />
          <TodoListItem todos={todos} onDelete={onDelete} />
        </div>
      </Router>
    </>
  );
}
