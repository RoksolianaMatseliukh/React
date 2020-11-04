import React, {Component} from 'react';

import FullUser from "../full-user-info/FullUser";
import {Link, Route, Switch, withRouter} from "react-router-dom";

class User extends Component {

    render() {
        const {path, url} = this.props.match;
        const {id, name} = this.props.user;

        return (
            <div>
                <ul>
                    <li>
                        <Link to={`${url}/${id}`}>{id}. {name}</Link>
                    </li>
                </ul>

                <Switch>
                    <Route path={`${path}/:id`}>
                        <FullUser userId={id} getTopUser={this.props.getTopUser}/>
                    </Route>
                </Switch>
            </div>
        );
    }
}

export default withRouter(User);
