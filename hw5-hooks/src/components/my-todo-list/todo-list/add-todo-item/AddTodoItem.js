import React from "react";

import s from './AddTodoItem.module.css';

const AddTodoItem = ({setNewTodoItem, addTodoItem, newTodo}) => (

    <form onSubmit={(e) => addTodoItem(e)}>
        <input type="text"
               placeholder="add new todo"
               value={newTodo}
               onChange={(e) => setNewTodoItem(e)}/>

        <button type="submit"
                className={`btn btn-dark btn-sm ${s.btnMargin}`}>
            add
        </button>
    </form>
);

export default AddTodoItem;
