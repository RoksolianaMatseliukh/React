import React, {Component} from 'react';

import s from './Comment.module.css';
import FullComment from "../full-comment-info/FullComment";

class Comment extends Component {

    state = {showFullComment: false};

    showHideFullComment = () => {
        this.setState({showFullComment: !this.state.showFullComment});
    }

    render() {
        const {id, name} = this.props.comment;

        return (
            <div>
                <h5> {id}. {name} </h5>

                {
                    !this.state.showFullComment &&
                    <button className={`btn btn-info btn-sm ${s.btnShow}`}
                            onClick={this.showHideFullComment}>
                        show full comment
                    </button>
                }

                { this.state.showFullComment && <FullComment commentId={id}/> }

                {
                    this.state.showFullComment &&
                    <button className={`btn btn-outline-secondary btn-sm ${s.btnHide}`}
                            onClick={this.showHideFullComment}>
                        hide full comment
                    </button>
                }
            </div>
        );
    }
}

export default Comment;
