import React from "react";

import SingleTodoItem from "./single-todo-item/SingleTodoItem";

const TodoList = ({todoList, changePriority, removeTodo, showDetails}) => (
    <div>
        { todoList.length ? <h4> Task(s) to do: </h4> : <p> Well done, all tasks are finished! </p> }
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

export default TodoList;
