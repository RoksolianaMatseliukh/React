import React, {Component} from 'react';

import {CommentService} from "../../../services/CommentService";
import spinner from "../../../common-styles/Spinner.module.css";
import {withRouter} from "react-router-dom";

class FullComment extends Component {

    api = new CommentService();
    state = {comment: {}};
    commentId = this.props.commentId

    componentDidMount() {
        setTimeout(async () => {
            this.setState({comment: await this.api.getFullComment(this.commentId)});
        }, 500);
    }

    render() {
        const {match: {params: {id}}, commentId} = this.props;
        const {id: cId, postId, name, email, body} = this.state.comment;

        return (
            <div>
                { !cId && (
                    <div>
                        {(commentId === +id) && <div className={spinner.loader}>Loading...</div>}
                    </div>
                )}

                { cId && (
                    <div>
                        {(commentId === +id) && (
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title"> id: {cId} - postId: {postId} </h5>
                                    <h6 className="card-subtitle mb-2 text-muted"> name: {name} </h6>
                                    <p className="card-text"> email: {email} <br/> body: {body} </p>
                                </div>
                            </div>
                        )}
                    </div>
                )}

            </div>
        );
    }
}

export default withRouter(FullComment);
