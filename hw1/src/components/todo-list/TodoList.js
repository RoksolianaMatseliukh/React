import React, {Component} from 'react';

import s from './TodoList.module.css';
import {todoList} from "../../data/data";
import Todo from "../todo-item/Todo";

class TodoList extends Component {

    state = {todoList, uncompletedTodo: true};
    todoList = todoList;


    mix = () => {
        // 1
        // let newArr = [];
        // for (let i = this.todoList.length; i > 0; i--) {
        //     const [elem] = this.todoList.splice(Math.floor(Math.random() * this.todoList.length), 1);
        //     newArr.push(elem);
        // }
        // this.setState({todoList: newArr});
        // this.todoList = newArr;

        // 2
        this.todoList.sort(() => Math.random() - 0.5);
        this.setState({todoList: this.todoList});
    }

    getUncompletedTodo = (todo) => {
        this.setState({uncompletedTodo: todo});
    }

    render() {

        return (
            <div>

                { this.state.uncompletedTodo && <h3> All task(s): </h3> }

                { !this.state.uncompletedTodo && <h3> Well done all tasks are finished! </h3> }

                <hr/>

                {
                    this.todoList.map(item => <Todo todoItem={item}
                                                    todoList={this.todoList}
                                                    getUncompletedTodo={this.getUncompletedTodo}
                                                    key={item.id}/>)
                }

                {
                    this.state.uncompletedTodo && <button className={`btn btn-dark btn-sm ${s.btnMargin}`} onClick={this.mix}> mix </button>
                }

            </div>

        );
    }
}

export default TodoList;
