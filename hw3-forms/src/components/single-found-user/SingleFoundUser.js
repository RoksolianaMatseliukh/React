import {NavLink, Route, Switch, withRouter} from "react-router-dom";
import React, {Component} from 'react';

import FullUserInfo from "../full-user-info/FullUserInfo";
import s from './SingleFoundUser.module.css';

class SingleFoundUser extends Component {

    render() {
        const {id, name} = this.props.singleFoundUser;

        return (
            <div>
                {id && (
                    <div>
                        <NavLink  className={s.linkView} to={`/user/${id}`}>{id}. {name}</NavLink>

                        <Switch>
                            <Route path={`/user/:id`}>
                                <FullUserInfo fullUserInfo={this.props.singleFoundUser}/>
                            </Route>
                        </Switch>
                    </div>
                )}
            </div>
        );
    }
}

export default withRouter(SingleFoundUser);
