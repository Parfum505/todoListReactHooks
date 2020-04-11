import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ToDoForm from "./components/ToDoForm";
import List from "./components/List";

function App() {
  return (
    <div className="App">
        <div className="container">
            <ToDoForm />
            <List />
        </div>
    </div>
  );
}

export default App;
