import React from "react";

import s from './SingleTodoItem.module.css';

function SingleTodoItem ({todoItem, index, changePriority, removeTodo, showDetails}) {

    const {id, name, isPriority, showDetails: todoDetails} = todoItem;

    return (
        <ul className={s.todo}>

            <li className={isPriority ? s.priority : s.nonPriority}
                onClick={() => showDetails(index)}>
                {name}
            </li>

            { todoDetails &&
                <span>
                    id: {id} <br/>
                    name: {name} <br/>
                    priority: {isPriority.toString()} <br/>
                </span> }

            <button onClick={() => changePriority(index)}
                    className="btn btn-outline-warning btn-sm">
                {!isPriority ? 'make priority' : 'make non priority'}
            </button>

            <button onClick={() => removeTodo({id, name}, index)}
                    className={`btn btn-outline-danger btn-sm ${s.btnMargin}`}>
                remove
            </button>

        </ul>
    );

}

export default SingleTodoItem;
