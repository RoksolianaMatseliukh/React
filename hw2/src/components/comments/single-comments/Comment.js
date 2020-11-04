import React, {Component} from 'react';

import FullComment from "../full-comment-info/FullComment";
import {Link, Route, Switch, withRouter} from "react-router-dom";

class Comment extends Component {

    render() {
        const {path, url} = this.props.match;
        const {id, name} = this.props.comment;

        return (
            <div>
                <ul>
                    <li>
                        <Link to={`${url}/${id}`}>{id}. {name}</Link>
                    </li>
                </ul>

                <Switch>
                    <Route path={`${path}/:id`}>
                        <FullComment commentId={id}/>
                    </Route>
                </Switch>
            </div>
        );
    }
}

export default withRouter(Comment);
