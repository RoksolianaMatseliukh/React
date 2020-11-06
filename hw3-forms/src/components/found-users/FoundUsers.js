import React, {Component} from 'react';

import SingleFoundUser from "../single-found-user/SingleFoundUser";
import {UserService} from "../../services/UserService";

class FoundUsers extends Component {

    api = new UserService();
    state = {users: []};

    async componentDidMount() {
        this.setState({users: await this.api.getUsers()});
    }

    render() {
        const {name} = this.props;
        const foundUsers = this.state.users.filter(user => user.name.toLowerCase().includes(name.toLowerCase()));

        return (
            <div>
                { !foundUsers.length && <p style={{color: 'red'}}> there is no user with this name </p> }
                {
                    foundUsers.map(user => <SingleFoundUser key={user.id} singleFoundUser={user}/>)
                }
            </div>
        );
    }
}

export default FoundUsers;
