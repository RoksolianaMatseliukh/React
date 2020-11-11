import React, {Component} from 'react';

import {CommentService} from "../../../services/CommentService";
import s from './FullComment.module.css';
import spinner from '../../../common-styles/Spinner.module.css';

class FullComment extends Component {

    api = new CommentService();
    state = {comment: []};
    id = this.props.match.params.id;

    async componentDidMount() {
        this.setState({comment: await this.api.getFullComment(this.id)});
    }

    render() {
        const {postId, id, name, email, body} = this.state.comment;

        return (
            <>
                { !id &&
                     <div className={spinner.loader}>Loading...</div>
                }

                { id &&
                    <div className={s.commentView}>
                        <b>id:</b> {id} <br/>
                        <b>name:</b> {name} <br/>
                        <b>postId:</b> {postId} <br/>
                        <b>email:</b> {email} <br/>
                        <b>body:</b> {body} <hr/>

                        <button className="btn btn-outline-info btn-sm" onClick={() => this.props.history.goBack()}> back </button>
                    </div>
                }
            </>
        );
    }
}

export default FullComment;
