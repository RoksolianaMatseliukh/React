import {NavLink, Route, Switch, withRouter} from "react-router-dom";
import React, {Component} from 'react';

import FullPost from "../../posts/full-post-with-comments/FullPost";
import s from "../../../common-styles/LinkView.module.css";

class SingleUserPost extends Component {

    render() {
        const {match: {path, url}, post: {id, title}} = this.props;

        return (
            <div>
                <NavLink to={`${url}/post/${id}`}
                         className={s.linkView}
                         activeClassName={s.activeLinkView}>
                    {id}. {title}
                </NavLink>

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
