import React, {Component} from 'react';
import {withRouter} from "react-router-dom";

import PostComments from "../../post-comments/all-post-comments/PostComments";
import {PostService} from "../../../services/PostService";
import s from './FullPost.module.css';

class FullPost extends Component {

    api = new PostService();
    state = {post: []};
    postId = this.props.postId;

    async componentDidMount() {
        this.setState({post: await this.api.getFullPost(this.postId)});
    }

    render() {
        const {match: {params: {id}}, postId} = this.props;
        const {userId, id: pId, title, body} = this.state.post;

        return (
            <>
                { pId &&
                    <>
                        { (pId === +id) &&
                            <div className={s.postView}>
                                <b>id:</b> {pId} <br/>
                                <b>title:</b> {title} <br/>
                                <b>userId:</b> {userId} <br/>
                                <b>body:</b> {body} <br/>

                                <PostComments postId={postId}/>
                            </div>
                        }
                    </>
                }
            </>
        );
    }
}

export default withRouter(FullPost);
