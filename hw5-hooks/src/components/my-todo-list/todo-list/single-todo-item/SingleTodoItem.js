import React from "react";

import s from './SingleTodoItem.module.css';

const SingleTodoItem = ({todoItem, index, changePriority, removeTodo, showDetails}) => (
    <ul className={s.todo}>

        <li className={todoItem.isPriority ? s.priority : undefined}
           onClick={() => showDetails(index)}>
            {todoItem.name}
        </li>

        { todoItem.showDetails &&
            <span>
                id: {todoItem.id} <br/>
                name: {todoItem.name} <br/>
                priority: {todoItem.isPriority.toString()} <br/>
            </span> }

        <button onClick={() => changePriority(index)}
                className="btn btn-outline-warning btn-sm">
            {!todoItem.isPriority ? 'make priority' : 'make non priority'}
        </button>

        <button onClick={() => removeTodo(todoItem, index)}
                className={`btn btn-outline-danger btn-sm ${s.btnMargin}`}>
            remove
        </button>

    </ul>
);

export default SingleTodoItem;
