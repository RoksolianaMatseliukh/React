import './App.css';
import React from "react";
import {Switch, Route, Redirect, NavLink} from "react-router-dom";
import AllUsers from "./components/users/all-users/AllUsers";
import Home from "./components/home/Home";
import AllPosts from "./components/posts/all-posts/AllPosts";
import AllComments from "./components/comments/all-comments/AllComments";

function App() {
  return (
    <div>
        <div className="listOfLinks">
            <NavLink exact to="/welcome" className="linkView" activeClassName="activeLinkView"> Home </NavLink>
            <NavLink to="/users" className="linkView margin" activeClassName="activeLinkView"> Users </NavLink>
            <NavLink to="/posts" className="linkView margin" activeClassName="activeLinkView"> Posts </NavLink>
            <NavLink to="/comments" className="linkView margin" activeClassName="activeLinkView"> Comments </NavLink>
        </div>
        <hr/>

        <Switch>
            <Route path="/users" component={AllUsers}/>
            <Route path="/posts" component={AllPosts}/>
            <Route path="/comments" component={AllComments}/>
            <Route path="/welcome" component={Home}/>

            <Redirect from="/" to="/welcome"/>
        </Switch>
    </div>
  );
}

export default App;
