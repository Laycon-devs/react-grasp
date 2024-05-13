import { useState } from "react";


const Todolist = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');
    const handleInputChange = (e) => {
        setNewTodo(e.target.value)
    }
    const addTodo = () => {
        // if (newTodo.trim() !== "") {
        //     setTodos(preTodos => [...preTodos, newTodo])
        // }
        if (newTodo === "") {
            alert("Add a Todo")
        } else {
            setTodos(preTodos => [...preTodos, newTodo])
            setNewTodo("")
        }
    }
    const deleteTodo = (index) => {
        const updatedTodo = todos.filter((t, i) => i !== index)
        setTodos(updatedTodo);
    }
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h2 className="text-center mb-4 fs-1 fw-bold ">Todo List</h2>
                    <div className="input-group my-5">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Add a new task"
                            value={newTodo}
                            onChange={handleInputChange}
                        />
                        <div className="input-group-append">
                            <button className="btn btn-primary" type="button" onClick={addTodo}>Add</button>
                        </div>
                    </div>
                    <ul className="list-group">
                        {todos.length === 0 ? (<h2 className="display-1 fw-bold text-center ">Add a Todo</h2>) : (todos.map((todo, index) => (
                            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                                {todo}
                                <button className="btn btn-danger" onClick={() => deleteTodo(index)}>Delete</button>
                            </li>
                        )))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Todolist
