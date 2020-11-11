import React, {Component} from 'react';
import {withRouter} from "react-router-dom";

import s from './FullUser.module.css';
import UserPosts from "../../user-posts/all-user-posts/UserPosts";
import {UserService} from "../../../services/UserService";

class FullUser extends Component {

    api = new UserService();
    state = {user: []};
    userId = this.props.userId;

    async componentDidMount() {
        this.setState({user: await this.api.getFullUser(this.userId)});
    }

    render() {
        const {match: {params: {id}}, userId} = this.props;
        const {id: uId, name, username, email, address: {street} = {}, phone} = this.state.user;

        return (
            <>
                { uId &&
                    <>
                        { (userId === +id) &&
                            <div className={s.userView}>
                                <b>id:</b> {uId} <br/>
                                <b>name:</b> {name} <br/>
                                <b>username:</b> {username} <br/>
                                <b>email:</b> {email} <br/>
                                <b>street:</b> {street} <br/>
                                <b>phone:</b> {phone} <br/>

                                <UserPosts userId={userId}/>
                            </div>
                        }
                    </>
                }
            </>
        );
    }
}

export default withRouter(FullUser);
