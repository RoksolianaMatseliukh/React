import React, {Component} from 'react';

import Comment from "../single-comments/Comment";
import {CommentService} from "../../../services/CommentService";

class Comments extends Component {

    api = new CommentService();
    state = {comments: []};

    async componentDidMount() {
        this.setState({comments: await this.api.getComments()});
    }

    render() {
        return (
            <div>
                {
                    this.state.comments.map(comment => <Comment comment={comment} key={comment.id}/>)
                }
            </div>
        );
    }
}

export default Comments;
