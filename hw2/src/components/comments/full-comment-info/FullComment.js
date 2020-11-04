import React, {Component} from 'react';

import {CommentService} from "../../../services/CommentService";

class FullComment extends Component {

    api = new CommentService();
    state = {comment: {}};
    commentId = this.props.commentId

    async componentDidMount() {
        this.setState({comment: await this.api.getFullComment(this.commentId)});
    }

    render() {
        const {id, postId, name, email, body} = this.state.comment;

        return (
            <div>
                {
                    id &&
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title"> id: {id} - postId: {postId} </h5>
                            <h6 className="card-subtitle mb-2 text-muted"> name: {name} </h6>
                            <p className="card-text"> email: {email} <br/> body: {body} </p>
                        </div>
                    </div>
                }
            </div>
        );
    }
}

export default FullComment;
