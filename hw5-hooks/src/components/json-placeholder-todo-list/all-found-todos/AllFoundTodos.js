import React from "react";

import SingleFoundTodo from "../single-found-todo/SingleFoundTodo";

const AllFoundTodos = ({foundTodos}) => !!foundTodos.length &&
                                            foundTodos.map(todo => <SingleFoundTodo key={todo.id} todo={todo}/>);

export default AllFoundTodos;
