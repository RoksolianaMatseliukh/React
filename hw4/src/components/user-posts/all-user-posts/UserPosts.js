import React, {Component} from 'react';

import SingleUserPost from "../single-user-post/SingleUserPost";
import spinner from '../../../common-styles/Spinner.module.css';
import {UserService} from "../../../services/UserService";
import {withRouter} from "react-router-dom";

class UserPosts extends Component {

    api = new UserService();
    state = {userPosts: [], showPosts: false};
    userId = this.props.userId;

    componentDidMount() {
        setTimeout(async () => {
            this.setState({userPosts: await this.api.getUserPosts(this.userId), showPosts: true});
        }, 1000);
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
                <hr/>

                <button className="btn btn-outline-info btn-sm" onClick={() => this.props.history.goBack()}> back </button>
            </>
        );
    }
}

export default withRouter(UserPosts);
