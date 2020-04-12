import React from "react";

function List(props) {
    const list = props.list.map((task) => {
       return (
           <li key={task.id} className="input-group mb-3" id={task.id}>
               <div className="custom-control custom-checkbox">
                   <input type="checkbox" id={`customCheck_${task.id}`}
                          className="custom-control-input"
                          checked={task.completed}
                          onChange={()=>props.setCompleted(task.id)}/>
                   <label className="custom-control-label" htmlFor={`customCheck_${task.id}`}>&nbsp;</label>
               </div>
               <input type="text" className="form-control" value={task.item} readOnly />
               <div className="input-group-append">
                   <button className="btn btn-danger input-group-text" onClick={()=>props.deletedTask(task.id)}>X</button>
               </div>
           </li>
       );
    });

    return (
        <div className="row justify-content-center">
            <ul id="todoList" className="list-group col-11 col-sm-10 col-md-7 col-lg-5">{list}</ul>
        </div>
    )
}

export default List;