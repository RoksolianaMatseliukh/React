import React, {Component} from 'react';
import {UserService} from "../../../services/UserService";
import SingleUserPost from "../single-user-post/SingleUserPost";
import {withRouter} from "react-router-dom";
import spinner from '../../../common-styles/Spinner.module.css';

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

        return (
            <div>
                { !this.state.showPosts && <div className={spinner.loader}>Loading...</div> }

                { this.state.showPosts && (
                    <div>
                        {
                            this.state.userPosts.map(post => <SingleUserPost key={post.id} post={post}/>)
                        }
                    </div>
                )}
            </div>
        );
    }
}

export default withRouter(UserPosts);
