import React, {Component} from 'react';
import {withRouter} from "react-router-dom";

import SingleUserPost from "../single-user-post/SingleUserPost";
import spinner from '../../../common-styles/Spinner.module.css';
import {UserService} from "../../../services/UserService";

class UserPosts extends Component {

    api = new UserService();
    state = {userPosts: [], showPosts: false};
    userId = this.props.userId;

    componentDidMount() {
        setTimeout(async () => {
            this.setState({userPosts: await this.api.getUserPosts(this.userId), showPosts: true});
        }, 500);
    }

    render() {
        const {userPosts, showPosts} = this.state;

        return (
            <>
                <hr/>
                <h5> Posts: </h5>

                { !showPosts && <div className={spinner.loader}>Loading...</div> }

                { showPosts &&
                    userPosts.map(post => <SingleUserPost key={post.id} post={post}/>)
                }
            </>
        );
    }
}

export default withRouter(UserPosts);
