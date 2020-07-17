import React from "react";
import ListItem from "./ListItem";

const List = ({ list, setCompleted, deleteTask }) => {
  return (
    <div className="row justify-content-center">
      <ul
        id="todoList"
        className="list-group col-11 col-sm-10 col-md-7 col-lg-5"
      >
        {list &&
          list.map((task) => (
            <ListItem
              key={task.id}
              task={task}
              deleteTask={deleteTask}
              setCompleted={setCompleted}
            />
          ))}
      </ul>
    </div>
  );
};

export default List;
