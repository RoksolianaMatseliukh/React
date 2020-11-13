import React, {useEffect, useState} from "react";

import AddTodoItem from "../todo-list/add-todo-item/AddTodoItem";
import DoneList from "../done-list/DoneList";
import s from './MainPage.module.css';
import TodoList from "../todo-list/TodoList";

function MainPage() {

    const myTodoList = [
        {id: 1, name: 'drink coffee', isPriority: false, showDetails: false},
        {id: 2, name: 'finish homework', isPriority: false, showDetails: false},
        {id: 3, name: 'read book', isPriority: false, showDetails: false},
        {id: 4, name: 'walk', isPriority: false, showDetails: false},
        {id: 5, name: 'sleep', isPriority: false, showDetails: false}
    ];

    const [isFormVisible, setIsFormVisible] = useState(false);
    const [todoList, setTodoList] = useState([]);
    const [doneList, setDoneList] = useState([]);
    const [newTodo, setNewTodo] = useState('');

    const changePriority = (index) => {
        const newToDoList = [...todoList];
        newToDoList[index].isPriority = !newToDoList[index].isPriority;

        setTodoList(newToDoList);
    }

    const removeTodo = (item, i) => {
        const newToDos = [...todoList];
        newToDos.splice(i, 1);

        setTodoList(newToDos);

        setDoneList([...doneList, item]);

    }

    const showDetails = (index) => {
        const newToDoList = [...todoList];
        newToDoList[index].showDetails = !newToDoList[index].showDetails;

        setTodoList(newToDoList);
    }

    const setNewTodoItem = (e) => {
        setNewTodo(e.target.value);
    }

    const addTodoItem = (e) => {
        e.preventDefault();

        const id = new Date().getTime();
        const newTodoItem = {id, name: newTodo, isPriority: false, showDetails: false};
        setTodoList([...todoList, newTodoItem]);
        setNewTodo('');
    }

    useEffect(() => {
        setTodoList(myTodoList);
    }, []);

    return (
        <div>
            <button onClick={() => setIsFormVisible((prevValue) => !prevValue)}
                    className="btn btn-info btn-sm">
                {!isFormVisible ? 'show' : 'hide'}
            </button>

            { isFormVisible &&
                <div className={s.listsView}>
                    <AddTodoItem setNewTodoItem={setNewTodoItem}
                                 addTodoItem={addTodoItem}
                                 newTodo={newTodo}/>

                    <TodoList todoList={todoList}
                              changePriority={changePriority}
                              removeTodo={removeTodo}
                              showDetails={showDetails}/>

                    <DoneList doneList={doneList}/>
                </div>
            }
        </div>
    );
}

export default MainPage;
