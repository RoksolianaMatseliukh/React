import React, {useEffect, useState} from "react";

import SingleFoundTodo from "../single-found-todo/SingleFoundTodo";
import {TodosService} from "../../../services/TodosService";

function SearchTodoById() {

    const api = new TodosService();

    const [todoId, setTodoId] = useState('');
    const [todo, setTodo] = useState(null);
    const [warning, setWarning] = useState(false);

    const getFoundTodoById = async (todoId) => {
        if (!todoId) {
            setTodo(null);
            setWarning(false);
            return;
        }

        if (todoId > 200 || todoId < 1) {
            setWarning(true);
            setTodo(null);
            return;
        }

        const todo = await api.getFoundTodoById(todoId);
        setWarning(false);
        setTodo(todo);
    }

    useEffect(() => {
        getFoundTodoById(todoId);
    }, [todoId]);

    return (
        <div>
            <form onSubmit={(e) => e.preventDefault()}>
                <input type="number"
                      value={todoId}
                      placeholder="enter todo id"
                      onChange={(e) => setTodoId(e.target.value)}/>
            </form>

            { warning && <p style={{color: 'red'}}> no todos with this id </p> }

            <SingleFoundTodo todo={todo}/>
        </div>
    )
}

export default SearchTodoById;
