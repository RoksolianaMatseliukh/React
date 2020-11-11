import React, {Component} from 'react';
import {withRouter} from "react-router-dom";

import {PostService} from "../../../services/PostService";
import SinglePostComment from "../single-post-comment/SinglePostComment";
import spinner from "../../../common-styles/Spinner.module.css";

class PostComments extends Component {

    api = new PostService();
    state = {postComments: [], showComments: false};
    postId = this.props.postId;

    componentDidMount() {
        setTimeout(async () => {
            this.setState({postComments: await this.api.getPostComments(this.postId), showComments: true});
        }, 500);
    }

    render() {
        const {postComments, showComments} = this.state;

        return (
            <>
                <hr/>
                <h5> Comments: </h5>

                { !showComments && <div className={spinner.loader}>Loading...</div> }

                { showComments &&
                    postComments.map(comment => <SinglePostComment key={comment.id} comment={comment}/>)
                }
            </>
        );
    }
}

export default withRouter(PostComments);
