import React from "react";

import s from './JsonPlaceholderTodoList.module.css';
import SearchRandomTodo from "../search-random-todo/SearchRandomTodo";
import SearchTodosByTitle from "../search-todos-by-title/SearchTodosByTitle";
import SearchTodoById from "../search-todo-by-id/SearchTodoById";

function JsonPlaceholderTodoList() {

    return (
        <div className={s.listsView}>
            <div>
                <p className={s.titleView}> find todoItem by id: </p>
                <SearchTodoById/>
            </div>

            <div>
                <p className={s.titleView}> find todoItem by title: </p>
                <SearchTodosByTitle/>
            </div>

            <div>
                <p className={s.titleView}> press to find todoItem by random id: </p>
                <SearchRandomTodo/>
            </div>
        </div>
    )
}

export default JsonPlaceholderTodoList;
