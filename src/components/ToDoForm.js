import React from "react";

function ToDoForm(props) {
    function validateForm(e) {
        e.preventDefault();
        let form = document.querySelector('.needs-validation'),
            inputText = document.getElementById('todo');
        if (inputText.value.trim() === ''){
            form.classList.add('was-validated');
        }
    }
    return (
        <div className="row justify-content-center">
            <form className="sol-sm-6 col-lg-5 mb-5 needs-validation" onSubmit={validateForm} action="" noValidate>
                <div className="input-group input-group-lg">
                    <input type="text" className="form-control" placeholder="Enter text ..." id="todo" required/>
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