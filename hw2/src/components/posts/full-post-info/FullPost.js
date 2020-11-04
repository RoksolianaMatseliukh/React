import React, {Component} from 'react';

import {PostService} from "../../../services/PostService";

class FullPost extends Component {

    api = new PostService();
    state = {post: {}};
    postId = this.props.postId

    async componentDidMount() {
        this.setState({post: await this.api.getFullPost(this.postId)});
    }

    render() {
        const {id, userId, title, body} = this.state.post;

        return (
            <div>
                {
                    id &&
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title"> id: {id} - userId: {userId} </h5>
                            <h6 className="card-subtitle mb-2 text-muted"> title: {title} </h6>
                            <p className="card-text"> body: {body} </p>
                        </div>
                    </div>
                }
            </div>
        );
    }
}

export default FullPost;
