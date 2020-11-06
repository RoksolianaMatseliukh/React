import {Link, Route, Switch, withRouter} from "react-router-dom";
import React, {Component} from 'react';

import FullUserInfo from "../full-user-info/FullUserInfo";

class SingleFoundUser extends Component {

    render() {
        const {id, name} = this.props.singleFoundUser;

        return (
            <div>
                {id && (
                    <div>
                        <ul>
                            <li>
                                <Link to={`/user/${id}`}>{id}. {name}</Link>
                            </li>
                        </ul>

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
