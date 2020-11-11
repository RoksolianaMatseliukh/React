import React, {Component} from 'react';
import {withRouter} from "react-router-dom";

import {CommentService} from "../../../services/CommentService";
import s from './FullComment.module.css';
import spinner from '../../../common-styles/Spinner.module.css';

class FullComment extends Component {

    api = new CommentService();
    state = {comment: []};
    commentId = this.props.commentId;

    async componentDidMount() {
        setTimeout(async () => {
            this.setState({comment: await this.api.getFullComment(this.commentId)});
        }, 500);
    }

    render() {
        const {match: {params: {id}}, commentId} = this.props;
        const {postId, id: cId, name, email, body} = this.state.comment;

        return (
            <>
                { !cId &&
                    <>
                        { (commentId === +id) && <div className={spinner.loader}>Loading...</div>}
                    </>
                }

                { cId &&
                    <>
                        { (commentId === +id) &&
                            <div className={s.commentView}>
                                <b>id:</b> {cId} <br/>
                                <b>name:</b> {name} <br/>
                                <b>postId:</b> {postId} <br/>
                                <b>email:</b> {email} <br/>
                                <b>body:</b> {body}
                            </div>
                        }
                    </>
                }
            </>
        );
    }
}

export default withRouter(FullComment);
