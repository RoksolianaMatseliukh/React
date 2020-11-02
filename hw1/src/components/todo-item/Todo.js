import React, {Component} from 'react';

import s from './Todo.module.css';

class Todo extends Component {

    state = {priority: this.props.todoItem.priority, isCompleted: this.props.todoItem.isCompleted};

    makePriority = (todoItem) => {
        todoItem.priority = !todoItem.priority;
        this.setState({priority: todoItem.priority});
    }

    makeCompleted = (todoItem) => {
        todoItem.isCompleted = !todoItem.isCompleted;
        this.setState({isCompleted: todoItem.isCompleted});

        const [todo] = this.props.todoList.filter(todo => !todo.isCompleted);
        this.props.getUncompletedTodo(todo);
    }

    render() {
        let {todoItem} = this.props;

        return (
            <div>

                {(todoItem.priority && !todoItem.isCompleted) && (
                    <div>
                        <p className={s.priorityTodo}>
                            {todoItem.id}. {todoItem.name} - priority: {todoItem.priority.toString()}
                        </p>

                        <button className={`btn btn-primary btn-sm`}
                                onClick={() => this.makePriority(todoItem)}>
                            cancel priority
                        </button>

                        <button className={`btn btn-success btn-sm ${s.btnMargin}`}
                                onClick={() => this.makeCompleted(todoItem)}>
                            make completed
                        </button>
                    </div>
                )}

                {(!todoItem.priority && !todoItem.isCompleted) && (
                    <div>
                        <p className={s.todo}>
                            {todoItem.id}. {todoItem.name} - priority: {todoItem.priority.toString()}
                        </p>

                        <button className={`btn btn-warning btn-sm`}
                                onClick={() => this.makePriority(todoItem)}>
                            make priority
                        </button>

                        <button className={`btn btn-success btn-sm ${s.btnMargin}`}
                                onClick={() => this.makeCompleted(todoItem)}>
                            make completed
                        </button>
                    </div>
                )}

            </div>
        );
    }
}

export default Todo;
