import React from "react";

const SingleFoundTodo = ({todo}) => !!todo && <p> {todo.id}. {todo.title} </p>;

export default SingleFoundTodo;
