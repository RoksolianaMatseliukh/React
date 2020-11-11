import React, {Component} from 'react';

import s from './FullUser.module.css';
import UserPosts from "../../user-posts/all-user-posts/UserPosts";
import {UserService} from "../../../services/UserService";

class FullUser extends Component {

    api = new UserService();
    state = {user: {}};
    id = this.props.match.params.id;

    async componentDidMount() {
        this.setState({user: await this.api.getFullUser(this.id)});
    }

    render() {
        const {id, name, username, email, address: {street} = {}, phone} = this.state.user;

        return (
            <>
                { id &&
                    <div className={s.userView}>
                        <b>id:</b> {id} <br/>
                        <b>name:</b> {name} <br/>
                        <b>username:</b> {username} <br/>
                        <b>email:</b> {email} <br/>
                        <b>street:</b> {street} <br/>
                        <b>phone:</b> {phone}

                        <UserPosts userId={id}/>
                    </div>
                }
            </>
        );
    }
}

export default FullUser;
