
import './App.css';
import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import AllUsers from "./components/users/all-users/AllUsers";

function App() {
  return (
    <div>
      <Router>
        <div>

          <Link to="/">Home</Link> <br/>
          <Link to="/users">Users</Link>
          <hr/>

          <Switch>
            <Route exact path="/">
              <p>Home</p>
            </Route>

            <Route path="/users">
              <AllUsers />
            </Route>
          </Switch>

        </div>
      </Router>
    </div>
  );
}

export default App;
