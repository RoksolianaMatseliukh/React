import {NavLink, Route, Switch, withRouter} from "react-router-dom";
import React, {Component} from 'react';

import FullComment from "../../comments/full-comment/FullComment";
import s from "../../../common-styles/LinkView.module.css";

class SinglePostComment extends Component {

    render() {
        const {match: {path, url}, comment: {id, name}} = this.props;

        return (
            <div>
                <NavLink to={`${url}/comment/${id}`}
                         className={s.linkView}
                         activeClassName={s.activeLinkView}>
                    {id}. {name}
                </NavLink>

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
