import React, {Component} from 'react';

import {PostService} from "../../../services/PostService";
import spinner from "../../../common-styles/Spinner.module.css";
import {withRouter} from "react-router-dom";


class FullPost extends Component {

    api = new PostService();
    state = {post: {}};
    postId = this.props.postId

    componentDidMount() {
        setTimeout(async () => {
            this.setState({post: await this.api.getFullPost(this.postId)});
        }, 500);
    }

    render() {
        const {match: {params: {id}}, postId} = this.props;
        const {id: pId, userId, title, body} = this.state.post;

        return (
            <div>
                { !pId && (
                    <div>
                        {(postId === +id) && <div className={spinner.loader}>Loading...</div>}
                    </div>
                )}

                { pId && (
                    <div>
                        {(postId === +id) && (
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title"> id: {pId} - userId: {userId} </h5>
                                    <h6 className="card-subtitle mb-2 text-muted"> title: {title} </h6>
                                    <p className="card-text"> body: {body} </p>
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>
        );
    }
}

export default withRouter(FullPost);
