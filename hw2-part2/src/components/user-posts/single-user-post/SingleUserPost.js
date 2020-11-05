import React, {Component} from 'react';
import {Link, Route, Switch, withRouter} from "react-router-dom";
import FullPost from "../full-post-with-comments/FullPost";

class SingleUserPost extends Component {

    render() {
        const {path, url} = this.props.match;
        const {id, title} = this.props.post;

        return (
            <div>
                <ul>
                    <li>
                        <Link to={`${url}/post/${id}`}>{id}. {title}</Link>
                    </li>
                </ul>

                <Switch>
                    <Route path={`${path}/post/:id`}>
                        <FullPost postId={id}/>
                    </Route>
                </Switch>
            </div>
        );
    }
}

export default withRouter(SingleUserPost);
