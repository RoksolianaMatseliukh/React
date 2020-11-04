import React, {Component} from 'react';

import s from './FullUser.module.css';
import spinner from './../../../common-styles/Spinner.module.css';
import {UserService} from "../../../services/UserService";
import {withRouter} from "react-router-dom";

class FullUser extends Component {

    api = new UserService();
    state = {user: {}};
    userId = this.props.userId;

    componentDidMount() {
        setTimeout(async () => {
            this.setState({user: await this.api.getFullUser(this.userId)});
        }, 500);
    }

    render() {
        const {match: {params: {id}}, userId} = this.props;
        const {id: uId, name, username, email, address: {street} = {}, phone} = this.state.user;

        return (
            <div>
                { !uId && (
                    <div>
                        {(userId === +id) && <div className={spinner.loader}>Loading...</div>}
                    </div>
                )}

                { uId && (
                    <div>
                        {(userId === +id) && (
                            <div>
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title"> {uId}. {name} </h5>
                                        <h6 className="card-subtitle mb-2 text-muted"> username: {username} </h6>
                                        <p className="card-text"> email: {email} <br/> street: {street} <br/> phone: {phone} </p>
                                    </div>
                                </div>

                                <button className={`btn btn-outline-success btn-sm ${s.btnMargin}`}
                                        onClick={() => this.props.getTopUser(userId)}>
                                    make user top
                                </button>
                            </div>
                        )}
                    </div>
                )}
            </div>
        );
    }
}

export default withRouter(FullUser);
