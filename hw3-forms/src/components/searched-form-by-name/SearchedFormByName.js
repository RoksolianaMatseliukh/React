import React, {Component} from 'react';
import {withRouter} from "react-router-dom";

import FoundUsers from "../found-users/FoundUsers";
import s from './../searched-form-by-id/SearchedFormById.module.css';
import {UserService} from "../../services/UserService";

class SearchedFormByName extends Component {

    api = new UserService();
    previousName = '';
    state = {users: [], foundUsers: [], name: ''};

    async componentDidMount() {
        this.setState({users: await this.api.getUsers()});
    }

    render() {

        return (
            <div>
                <h3 className={s.titleView}> search user(s) by name: </h3>

                <form>
                    <div className="form-group w-60">
                        <input type="text"
                               value={this.state.name}
                               className="form-control"
                               placeholder="enter name"
                               onChange={this.onInputSearchUser}/>
                    </div>
                </form>

                { this.state.name && <FoundUsers foundUsers={this.state.foundUsers}/> }
            </div>
        );
    }

    onInputSearchUser = (e) => {
        const foundUsers = this.state.users.filter(user => user.name.toLowerCase().includes(e.target.value.toLowerCase()));

        if (!e.target.value || this.previousName !== e.target.value) {
            this.setState({foundUsers, name: e.target.value});
            this.props.history.push('/');
            return;
        }

        this.setState({foundUsers, name: e.target.value});
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.previousName = prevState;
    }
}

export default withRouter(SearchedFormByName);
