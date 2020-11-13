import React, {useEffect, useState} from "react";

import SingleFoundTodo from "../single-found-todo/SingleFoundTodo";
import {TodosService} from "../../../services/TodosService";

function SearchRandomTodo() {

    const api = new TodosService();

    const [todoId, setTodoId] = useState(0);
    const [todo, setTodo] = useState(null);

    const getRandomTodoById = async (todoId) => {
        if (!todoId) {
            return;
        }

        const todo = await api.getFoundTodoById(todoId);
        setTodo(todo);
    }

    useEffect(() => {
        getRandomTodoById(todoId);
    }, [todoId]);

    return (
        <div>
            <button onClick={() => setTodoId(Math.floor(Math.random()*201))}
                    className="btn btn-primary btn-sm">
                press
            </button>
            <br/>
            <br/>

            <SingleFoundTodo todo={todo}/>
        </div>
    );
}

export default SearchRandomTodo;
