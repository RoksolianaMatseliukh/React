import {NavLink, Route, Switch, withRouter} from "react-router-dom";
import React, {Component} from 'react';

import FullComment from "../full-comment/FullComment";
import s from '../../../common-styles/LinkView.module.css';

class SingleComment extends Component {

    render() {
        const {match: {path, url}, comment: {id, name}} = this.props;

        return (
            <div>
                <NavLink to={`${url}/${id}`}
                         className={s.linkView}
                         activeClassName={s.activeLinkView}>
                    {id}. {name}
                </NavLink>

                <Switch>
                    <Route path={`${path}/:id`}>
                        <FullComment commentId={id}/>
                    </Route>
                </Switch>
            </div>
        );
    }
}

export default withRouter(SingleComment);
