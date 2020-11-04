import React, {Component} from 'react';

import User from "../single-user/User";
import {UserService} from "../../../services/UserService";
import s from './Users.module.css';

class Users extends Component {

    api = new UserService();
    state = {users: [], topUser: {}};

    async componentDidMount() {
        this.setState({users: await this.api.getUsers()});
    }

    getTopUser = (userId) => {
        const topUser = this.state.users.find(user => user.id === userId);
        this.setState({topUser});
    }

    render() {
        const {id, name} = this.state.topUser;

        return (
            <div>
                {
                    id && <h4 className={s.topUser}> {id}. {name} </h4>
                }

                {
                    this.state.users.map(user => <User user={user} getTopUser={this.getTopUser} key={user.id}/>)
                }
            </div>
        );
    }
}

export default Users;
