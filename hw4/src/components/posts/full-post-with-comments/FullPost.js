import React, {Component} from 'react';

import PostComments from "../../post-comments/all-post-comments/PostComments";
import {PostService} from "../../../services/PostService";
import s from './FullPost.module.css';

class FullPost extends Component {

    api = new PostService();
    state = {post: {}};
    id = this.props.match.params.id;

    async componentDidMount() {
        this.setState({post: await this.api.getFullPost(this.id)});
    }

    render() {
        const {userId, id, title, body} = this.state.post;

        return (
            <>
                { id &&
                    <div className={s.postView}>
                        <b>id:</b> {id} <br/>
                        <b>title:</b> {title} <br/>
                        <b>userId:</b> {userId} <br/>
                        <b>body:</b> {body}

                        <PostComments postId={id}/>
                    </div>
                }
            </>
        );
    }
}

export default FullPost;
