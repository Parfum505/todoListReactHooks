import React, { useState } from "react";

function ToDoForm(props) {
    const [todo, setTodo] = useState({
        id: 0,
        item: '',
        finished: false
    });
    function inputChange (e) {
        setTodo({...todo, item: e.target.value, id: props.lastId});
    }
    function handleSubmitForm (e) {
        e.preventDefault();
        const form = document.querySelector('.needs-validation'),
              newTask = form.elements["newTask"].value;
        if (!newTask.trim()){
            form.classList.add('was-validated');
        } else {
            const newId = todo.id + 1;
            props.addTask(newId, todo);
            setTodo({...todo, item: ''});
        }
    }
    return (
        <div className="row justify-content-center">
            <form className="sol-sm-6 col-lg-5 mb-5 needs-validation" onSubmit={handleSubmitForm} action="" noValidate>
                <div className="input-group input-group-lg">
                    <input type="text"
                           name="newTask"
                           value={todo.item}
                           className="form-control"
                           placeholder="Enter text ..."
                           id="todo" required
                           onChange={inputChange}
                    />
                    <div className="input-group-append">
                        <button type="submit" className="btn btn-primary">Add</button>
                    </div>
                    <div className="invalid-feedback">Please fill out this field.</div>
                </div>
            </form>
        </div>
    )
}

export default ToDoForm;