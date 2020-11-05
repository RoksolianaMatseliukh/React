import React, {Component} from 'react';
import {Link, Route, Switch, withRouter} from "react-router-dom";
import FullUser from "../full-user-with-posts/FullUser";

class SingleUser extends Component {

    render() {
        const {path, url} = this.props.match;
        const {id, name} = this.props.user;

        return (
            <div>
                <ul>
                    <li>
                        <Link to={`${url}/${id}`}> {id}. {name} </Link>
                    </li>
                </ul>

                <Switch>
                    <Route path={`${path}/:id`}>
                        <FullUser userId={id}/>
                    </Route>
                </Switch>
            </div>
        );
    }
}

export default withRouter(SingleUser);
