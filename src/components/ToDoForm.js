import React, { useState } from "react";

function ToDoForm({ addTask, lastId }) {
  const [todo, setTodo] = useState({
    id: 0,
    item: "",
    completed: false,
  });
  const [isValidatedForm, setIsValidatedForm] = useState("");
  function inputChange(e) {
    setTodo({ ...todo, item: e.target.value, id: lastId });
  }
  function handleSubmitForm(e) {
    e.preventDefault();
    if (!todo.item.trim()) {
      setIsValidatedForm("was-validated");
    } else {
      const newId = todo.id + 1;
      addTask(newId, todo);
      setTodo({ ...todo, item: "" });
      setIsValidatedForm("");
    }
  }
  return (
    <div className="row justify-content-center">
      <form
        data-testid="form"
        className={`col-11 col-sm-10 col-md-7 col-lg-5 mb-5 needs-validation ${isValidatedForm}`}
        onSubmit={handleSubmitForm}
        action=""
        noValidate
      >
        <div className="input-group input-group-lg">
          <input
            type="text"
            name="newTask"
            value={todo.item}
            className="form-control"
            placeholder="Enter text ..."
            id="todo"
            required
            onChange={inputChange}
          />
          <div className="input-group-append">
            <button id="submit_btn" type="submit" className="btn btn-primary">
              Add
            </button>
          </div>
          {isValidatedForm ? (
            <div className="invalid-feedback">Please fill out this field.</div>
          ) : null}
        </div>
      </form>
    </div>
  );
}

export default ToDoForm;
