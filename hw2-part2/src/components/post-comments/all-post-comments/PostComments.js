import React, {Component} from 'react';
import {PostService} from "../../../services/PostService";
import {withRouter} from "react-router-dom";
import SinglePostComment from "../single-post-comment/SinglePostComment";

class PostComments extends Component {

    api = new PostService();
    state = {postComments: []};
    postId = this.props.postId;

    async componentDidMount() {
        this.setState({postComments: await this.api.getPostComments(this.postId)});
    }

    render() {
        return (
            <div>
                {
                    this.state.postComments.map(comment => <SinglePostComment key={comment.id} comment={comment}/>)
                }
            </div>
        );
    }
}

export default withRouter(PostComments);
