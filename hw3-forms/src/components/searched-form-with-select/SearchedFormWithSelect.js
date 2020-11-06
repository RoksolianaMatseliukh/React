import React, {Component} from 'react';
import {withRouter} from "react-router-dom";

import s from './../searched-form-by-id/SearchedFormById.module.css';
import SingleFoundUser from "../single-found-user/SingleFoundUser";
import {UserService} from "../../services/UserService";

class SearchedFormWithSelect extends Component {

    api = new UserService();
    state = {users: [], user: {}};

    async componentDidMount() {
        this.setState({users: await this.api.getUsers()});
    }

    render() {

        return (
            <div>
                <h3 className={s.titleView}> search user by id using select: </h3>

                <div className="form-group w-55">
                    <select className="custom-select" onChange={this.onInputSearchUser}>
                    <option value=''/>
                    {this.state.users.map(user =>
                        <option key={user.id} value={user.id}> {user.name}</option>
                    )}
                    </select>
                </div>

                { this.state.user.id && <SingleFoundUser singleFoundUser={this.state.user}/> }
            </div>
        );
    }

    onInputSearchUser = async (e) => {
        this.setState({user: await this.api.getSingleUser(e.target.value)});
        this.props.history.push('/');
    }
}

export default withRouter(SearchedFormWithSelect);
