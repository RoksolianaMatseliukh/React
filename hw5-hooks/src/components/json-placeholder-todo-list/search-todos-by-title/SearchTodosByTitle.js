import React, {useEffect, useState} from "react";

import AllFoundTodos from "../all-found-todos/AllFoundTodos";
import {TodosService} from "../../../services/TodosService";

function SearchTodosByTitle() {

    const api = new TodosService();

    const [todoTitle, setTodoTitle] = useState('');
    const [todos, setTodos] = useState([]);
    const [foundTodos, setFoundTodos] = useState([]);
    const [warning, setWarning] = useState(false);

    const getAllTodos = async () => {
        const todos = await api.getAllTodos();
        setTodos(todos);
    }

    const getTodosByTitle = (e) => {
        setTodoTitle(e.target.value);

        if (!e.target.value) {
            setWarning(false);
            setFoundTodos([]);
            return;
        }

        const foundTodos = todos
            .filter(todo => todo.title.toLowerCase().includes(e.target.value.toLowerCase()));

        if (!foundTodos.length) {
            setWarning(true);
            setFoundTodos([]);
            return;
        }

        setWarning(false);
        setFoundTodos(foundTodos);
    }

    useEffect(() => {
        getAllTodos();
    }, []);

    return (
        <div>
            <form onSubmit={(e) => e.preventDefault()}>
                <input type="text"
                      value={todoTitle}
                      placeholder="enter todo title"
                      onChange={getTodosByTitle}/>
            </form>

            { warning && <p style={{color: 'red'}}> no todos with this title </p> }

            <AllFoundTodos foundTodos={foundTodos}/>
        </div>
    );
}

export default SearchTodosByTitle;
