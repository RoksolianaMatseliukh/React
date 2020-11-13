import React from "react";
import {Route, Switch} from "react-router-dom";

import Home from "../home/Home";
import JsonPlaceholderTodoList from "../json-placeholder-todo-list/main-page/JsonPlaceholderTodoList";
import MainPage from "../my-todo-list/main-page/MainPage";
import RegistrationForm from "../registration-form/RegistrationForm";
import UnknownPage from "../unknown-page/UnknownPage";

const Routes = () => (
    <Switch>
        <Route path="/json_placeholder_todo_list" component={JsonPlaceholderTodoList} />
        <Route path="/registration_form" component={RegistrationForm} />
        <Route path="/my_todo_list" component={MainPage} />
        <Route path="/" exact component={Home} />

        <Route component={UnknownPage}/>
    </Switch>
);

export default Routes;
