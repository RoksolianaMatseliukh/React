import React, {Component} from 'react';

import s from './Post.module.css';
import FullPost from "../full-post-info/FullPost";

class Post extends Component {

    state = {showFullPost: false};

    showHideFullPost = () => {
        this.setState({showFullPost: !this.state.showFullPost});
    }

    render() {
        const {id, title} = this.props.post;

        return (
            <div>
                <h5> {id}. {title} </h5>

                {
                    !this.state.showFullPost &&
                    <button className={`btn btn-info btn-sm ${s.btnShow}`}
                            onClick={this.showHideFullPost}>
                        show full post
                    </button>
                }

                { this.state.showFullPost && <FullPost postId={id}/> }

                {
                    this.state.showFullPost &&
                    <button className={`btn btn-outline-secondary btn-sm ${s.btnHide}`}
                            onClick={this.showHideFullPost}>
                        hide full post </button>
                }
            </div>
        );
    }
}

export default Post;
