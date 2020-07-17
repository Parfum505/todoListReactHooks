import React from "react";

const ListItem = ({ task, setCompleted, deleteTask }) => (
  <li className="input-group mb-3" id={task.id}>
    <div className="custom-control custom-checkbox">
      <input
        type="checkbox"
        id={`customCheck_${task.id}`}
        className="custom-control-input"
        checked={task.completed}
        onChange={() => setCompleted(task.id)}
      />
      <label
        className="custom-control-label"
        htmlFor={`customCheck_${task.id}`}
      >
        &nbsp;
      </label>
    </div>
    <input
      type="text"
      className={`form-control ${task.completed ? "completed" : ""}`}
      value={task.item}
      readOnly
    />
    <div className="input-group-append">
      <button
        className="btn btn-danger input-group-text"
        onClick={() => deleteTask(task.id)}
      >
        X
      </button>
    </div>
  </li>
);

export default React.memo(ListItem);
