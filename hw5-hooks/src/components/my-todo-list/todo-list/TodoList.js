import React from "react";

import SingleTodoItem from "./single-todo-item/SingleTodoItem";

function TodoList ({todoList, changePriority, removeTodo, showDetails}) {

    const msg = () => {
        if (todoList.length) {
            return <h4> Task(s) to do: </h4>;
        }

        return <p> Well done, all tasks are finished! </p>;
    }

    return (
        <div>
            { msg() }
            <br/>

            {
                todoList.map((todoItem, i) => <SingleTodoItem key={todoItem.id}
                                                              todoItem={todoItem}
                                                              index={i}
                                                              changePriority={changePriority}
                                                              removeTodo={removeTodo}
                                                              showDetails={showDetails}/>)
            }
        </div>
    );
}

export default TodoList;
