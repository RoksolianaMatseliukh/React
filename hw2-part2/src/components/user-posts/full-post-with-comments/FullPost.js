import React, {Component} from 'react';
import {PostService} from "../../../services/PostService";
import {withRouter} from "react-router-dom";
import s from './FullPost.module.css';
import spinner from '../../../common-styles/Spinner.module.css';
import PostComments from "../../post-comments/all-post-comments/PostComments";

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
            <div>
                { !pId && (
                    <div>
                        { (postId === +id) && <div className={spinner.loader}>Loading...</div>}
                    </div>
                )}

                { pId && (
                    <div>
                        { (pId === +id) && (
                            <div className={s.postView}>
                                {pId}. {title} <br/>
                                userId: {userId} <br/>
                                body: {body} <br/>

                                <PostComments postId={postId}/>
                            </div>
                        )}
                    </div>
                )}
            </div>
        );
    }
}

export default withRouter(FullPost);
