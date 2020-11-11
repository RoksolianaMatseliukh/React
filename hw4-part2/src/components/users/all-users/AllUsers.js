import React, {Component} from 'react';
import {withRouter} from "react-router-dom";

import SingleUser from "../single-user/SingleUser";
import spinner from '../../../common-styles/Spinner.module.css';
import {UserService} from "../../../services/UserService";

class AllUsers extends Component {

    api = new UserService();
    state = {users: [], showUsers: false};

    componentDidMount() {
        setTimeout(async () => {
            this.setState({users: await this.api.getUsers(), showUsers: true});
        }, 500);
    }

    render() {
        const {users, showUsers} = this.state;

        return (
            <div>
                { !showUsers && <div className={spinner.loader}>Loading...</div> }

                { showUsers &&
                            users.map(user => <SingleUser user={user} key={user.id}/>)
                }
            </div>
        );
    }
}

export default withRouter(AllUsers);
