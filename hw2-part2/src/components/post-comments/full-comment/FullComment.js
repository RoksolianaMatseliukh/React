import React, {Component} from 'react';
import {CommentService} from "../../../services/CommentService";
import s from './FullComment.module.css';
import spinner from '../../../common-styles/Spinner.module.css';
import {withRouter} from "react-router-dom";

class FullComment extends Component {

    api = new CommentService();
    state = {comment: []};
    commentId = this.props.commentId;

    async componentDidMount() {
        this.setState({comment: await this.api.getFullComment(this.commentId)});
    }

    render() {
        const {match: {params: {id}}, commentId} = this.props;
        const {postId, id: cId, name, email, body} = this.state.comment;

        return (
            <div>
                { !cId && (
                    <div>
                        { (commentId === +id) && <div className={spinner.loader}>Loading...</div>}
                    </div>
                )}

                { cId && (
                    <div>
                        { (commentId === +id) && (
                            <div className={s.commentView}>
                                {cId}. {name} <br/>
                                postId: {postId} <br/>
                                email: {email} <br/>
                                body: {body}
                            </div>
                        )}
                    </div>
                )}
            </div>
        );
    }
}

export default withRouter(FullComment);
