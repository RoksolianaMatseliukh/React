import React, {Component} from 'react';

import s from './Header.module.css';
import {BrowserRouter as Router, NavLink, Redirect, Route, Switch} from "react-router-dom";
import Users from "../users/all-users/Users";
import Posts from "../posts/all-posts/Posts";
import Comments from "../comments/all-comments/Comments";
import Home from "../home/Home";

class Header extends Component {

    render() {
        return (
            <Router>
                <NavLink exact={true} className={s.linkView} activeClassName={s.activeLink} to="/welcome"> HOME </NavLink>
                <NavLink className={s.linkView} activeClassName={s.activeLink} to="/users"> USERS </NavLink>
                <NavLink className={s.linkView} activeClassName={s.activeLink} to="/posts"> POSTS </NavLink>
                <NavLink className={s.linkView} activeClassName={s.activeLink} to="/comments"> COMMENTS </NavLink>
                <hr/>

                <Switch>
                    <Route path="/users" component={Users}/>
                    <Route path="/posts" component={Posts}/>
                    <Route path="/comments" component={Comments}/>
                    <Route path="/welcome" component={Home}/>
                    <Redirect from="/" to="/welcome"/>
                </Switch>
            </Router>
        );
    }
}

export default Header;
