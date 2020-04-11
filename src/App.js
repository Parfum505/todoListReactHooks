import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ToDoForm from "./components/ToDoForm";
import List from "./components/List";

function App() {
    const [todos, setTodos] = useState({lastId: 1, list: []});
    function addTask (newId, todo) {
        setTodos({lastId: newId, list: [todo, ...todos.list]})
    }
  return (
    <div className="App">
        <div className="container">
            <ToDoForm lastId={todos.lastId} addTask={addTask}/>
            <List list={todos.list}/>
        </div>
    </div>
  );
}

export default App;
