import React, {Component} from 'react';

import {UserService} from "../../../services/UserService";
import s from './FullUser.module.css';

class FullUser extends Component {

    api = new UserService();
    state = {user: {}};
    userId = this.props.userId;

    async componentDidMount() {
        this.setState({user: await this.api.getFullUser(this.userId)});
    }

    render() {
        const {id, name, username, email, address: {street} = {}, phone} = this.state.user;

        return (
            <div>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title"> {id}. {name} </h5>
                        <h6 className="card-subtitle mb-2 text-muted"> username: {username} </h6>
                        <p className="card-text"> email: {email} <br/> street: {street} <br/> phone: {phone} </p>
                    </div>
                </div>

                <button className={`btn btn-outline-success btn-sm ${s.btnMargin}`}
                        onClick={() => this.props.getTopUser(id)}>
                    make user top
                </button>
            </div>
        );
    }
}

export default FullUser;
