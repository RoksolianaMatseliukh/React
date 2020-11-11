import {NavLink, Route, Switch, withRouter} from "react-router-dom";
import React, {Component} from 'react';

import FullPost from "../full-post-with-comments/FullPost";
import s from "../../../common-styles/LinkView.module.css";

class SinglePost extends Component {

    render() {
        const {match: {path, url}, post: {id, title}} = this.props;

        return (
            <div>
                <NavLink to={`${url}/${id}`}
                         className={s.linkView}
                         activeClassName={s.activeLinkView}>
                    {id}. {title}
                </NavLink>

                <Switch>
                    <Route path={`${path}/:id`}>
                        <FullPost postId={id}/>
                    </Route>
                </Switch>
            </div>
        );
    }
}

export default withRouter(SinglePost);
