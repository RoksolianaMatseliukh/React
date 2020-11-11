import {NavLink, Route, Switch, withRouter} from "react-router-dom";
import React, {Component} from 'react';

import FullUser from "../full-user-with-posts/FullUser";
import s from "../../../common-styles/LinkView.module.css";

class SingleUser extends Component {

    render() {
        const {match: {path, url}, user: {id, name}} = this.props;

        return (
            <div>
                <NavLink to={`${url}/${id}`}
                         className={s.linkView}
                         activeClassName={s.activeLinkView}>
                    {id}. {name}
                </NavLink>

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
