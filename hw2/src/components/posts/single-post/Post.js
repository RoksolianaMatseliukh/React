import React, {Component} from 'react';

import FullPost from "../full-post-info/FullPost";
import {Link, Route, Switch, withRouter} from "react-router-dom";

class Post extends Component {

    render() {
        const {path, url} = this.props.match;
        const {id, title} = this.props.post;

        return (
            <div>
                <ul>
                    <li>
                        <Link to={`${url}/${id}`}>{id}. {title}</Link>
                    </li>
                </ul>

                <Switch>
                    <Route path={`${path}/:id`}>
                        <FullPost postId={id}/>
                    </Route>
                </Switch>
            </div>
        );
    }
}

export default withRouter(Post);
