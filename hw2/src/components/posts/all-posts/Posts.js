import React, {Component} from 'react';

import Post from "../single-post/Post";
import {PostService} from "../../../services/PostService";

class Posts extends Component {

    api = new PostService();
    state = {posts: []};

    async componentDidMount() {
        this.setState({posts: await this.api.getPosts()});
    }

    render() {
        return (
            <div>
                {
                    this.state.posts.map(post => <Post post={post} key={post.id}/>)
                }
            </div>
        );
    }
}

export default Posts;
