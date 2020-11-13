import {NavLink} from "react-router-dom";
import React from "react";

import s from './Header.module.css';

const Header = () => (
    <>
        <div className={s.listOfLinks}>
            <NavLink exact to="/"
                     className={s.linkView}
                     activeClassName={s.activeLinkView}>
                HOME
            </NavLink>

            <NavLink to="/my_todo_list"
                     className={`${s.linkView} ${s.btnMargin}`}
                     activeClassName={s.activeLinkView}>
                MY TODOLIST
            </NavLink>

            <NavLink to="json_placeholder_todo_list"
                     className={`${s.linkView} ${s.btnMargin}`}
                     activeClassName={s.activeLinkView}>
                TODOLIST FROM JSON PLACEHOLDER
            </NavLink>

            <NavLink to="/registration_form"
                     className={`${s.linkView} ${s.btnMargin}`}
                     activeClassName={s.activeLinkView}>
                REGISTRATION FORM
            </NavLink>
        </div>

        <hr/>
    </>
);

export default Header;
