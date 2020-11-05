import React, {Component} from 'react';
import {Link, Route, Switch, withRouter} from "react-router-dom";
import FullComment from "../full-comment/FullComment";

class SinglePostComment extends Component {

    render() {
        const {path, url} = this.props.match;
        const {id, name} = this.props.comment;

        return (
            <div>
                <ul>
                    <li>
                        <Link to={`${url}/comment/${id}`}>{id}. {name}</Link>
                    </li>
                </ul>

                <Switch>
                    <Route path={`${path}/comment/:id`}>
                        <FullComment commentId={id}/>
                    </Route>
                </Switch>
            </div>
        );
    }
}

export default withRouter(SinglePostComment);
