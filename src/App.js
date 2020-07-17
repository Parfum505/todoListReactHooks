import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ToDoForm from "./components/ToDoForm";
import List from "./components/List";

function App() {
  const [todos, setTodos] = useState({ lastId: 1, list: [] });

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todoList"));
    if (savedTodos && savedTodos.list) {
      setTodos(savedTodos);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todos));
  }, [todos]);

  const addTask = (newId, todo) => {
    setTodos({ lastId: newId, list: [todo, ...todos.list] });
  };
  const deleteTask = (id) => {
    const newList = todos.list.filter((task) => {
      return task.id !== id;
    });
    setTodos({ ...todos, list: [...newList] });
  };
  const setCompleted = (id) => {
    const newList = todos.list.map((item) => {
      if (item.id === id) item.completed = !item.completed;
      return item;
    });
    setTodos({ ...todos, list: [...newList] });
  };
  return (
    <div className="App">
      <div className="container mt-5">
        <h1 className="h2 mb-5 text-center">ToDo List with React Hooks</h1>
        <ToDoForm lastId={todos.lastId} addTask={addTask} />
        <List
          list={todos.list}
          deleteTask={deleteTask}
          setCompleted={setCompleted}
        />
      </div>
    </div>
  );
}

export default App;
