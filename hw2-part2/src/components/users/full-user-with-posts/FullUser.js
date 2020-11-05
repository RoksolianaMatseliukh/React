import React, {Component} from 'react';
import s from './FullUser.module.css';
import {withRouter} from "react-router-dom";
import {UserService} from "../../../services/UserService";
import UserPosts from "../../user-posts/all-user-posts/UserPosts";

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
            <div>

                { uId && (
                    <div>
                        { (userId === +id) && (
                            <div className={s.userView}>
                                {uId}. {name} <br/>
                                username: {username} <br/>
                                email: {email} <br/>
                                street: {street} <br/>
                                phone: {phone} <br/>

                                <UserPosts userId={userId}/>
                            </div>
                        )}
                    </div>
                )}

            </div>
        );
    }
}

export default withRouter(FullUser);
