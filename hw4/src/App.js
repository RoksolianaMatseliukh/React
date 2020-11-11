import React from "react";
import {Switch, Route, NavLink} from "react-router-dom";

import './App.css';
import AllComments from "./components/comments/all-comments/AllComments";
import AllPosts from "./components/posts/all-posts/AllPosts";
import AllUsers from "./components/users/all-users/AllUsers";
import FullComment from "./components/comments/full-comment/FullComment";
import FullPost from "./components/posts/full-post-with-comments/FullPost";
import FullUser from "./components/users/full-user-with-posts/FullUser";
import Home from "./components/home/Home";
import UnknownPage from "./components/unknown-page/UnknownPage";

function App() {

  return (
    <div>
        <div className="listOfLinks">
            <NavLink exact to="/" className="linkView" activeClassName="activeLinkView">HOME</NavLink>
            <NavLink to="/users" className="linkView btnMargin" activeClassName="activeLinkView">USERS</NavLink>
            <NavLink to="/posts" className="linkView btnMargin" activeClassName="activeLinkView">POSTS</NavLink>
            <NavLink to="/comments" className="linkView btnMargin" activeClassName="activeLinkView">COMMENTS</NavLink>
        </div>
        <hr/>

        <Switch>
            <Route exact path="/users/:id/post/:id/comment/:id" component={FullComment} />
            <Route exact path="/posts/:id/comment/:id" component={FullComment} />
            <Route exact path="/users/:id/post/:id" component={FullPost} />
            <Route exact path="/users/:id" component={FullUser} />
            <Route exact path="/posts/:id" component={FullPost} />
            <Route exact path="/comments/:id" component={FullComment} />
            <Route exact path="/users" component={AllUsers} />
            <Route exact path="/posts" component={AllPosts} />
            <Route exact path="/comments" component={AllComments} />
            <Route exact path="/" component={Home} />

            <Route component={UnknownPage}/>
        </Switch>
    </div>
  );
}

export default App;
