import React, {Component} from 'react';

import {CommentService} from "../../../services/CommentService";
import SingleComment from "../single-comment/SingleComment";
import spinner from "../../../common-styles/Spinner.module.css";

class AllComments extends Component {

    api = new CommentService();
    state = {comments: [], showComments: false};

    componentDidMount() {
        setTimeout(async () => {
            this.setState({comments: await this.api.getComments(), showComments: true});
        }, 500);
    }

    render() {
        const {comments, showComments} = this.state;

        return (
            <>
                { !showComments && <div className={spinner.loader}>Loading...</div> }

                { showComments &&
                    comments.map(comment => <SingleComment comment={comment} key={comment.id}/>)
                }
            </>
        );
    }
}

export default AllComments;
