import React, { useState, useEffect } from 'react'

export default function Utodo() {
    const [task, setTask] = useState("");
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const storeTodos = JSON.parse(localStorage.getItem("todos")) || [];
        setTodos(storeTodos);
    }, []);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const addTodo = () => {
        if (task.trim()) {
            setTodos([...todos, task]);
            setTask("");
        }
    };

    const deleteBtn = (index) => {
        const update = todos.filter((_, id) => id !== index);
        setTodos(update);
    };

    return (
        <div>
            <h1>Todo</h1>

            <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="enter any name here"
            />

            <button onClick={addTodo}>Add Todo</button>

            {todos.map((el, id) => {
                return (
                    <div key={id}>
                        <li>{el}</li>
                        <button onClick={() => deleteBtn(id)}>Delete</button>
                    </div>
                )
            })}
        </div>
    )
}
