import React, {Component} from 'react';

import {PostService} from "../../../services/PostService";
import SinglePost from "../single-post/SinglePost";
import spinner from "../../../common-styles/Spinner.module.css";

class AllPosts extends Component {

    api = new PostService();
    state = {posts: [], showPosts: false};

    componentDidMount() {
        setTimeout(async () => {
            this.setState({posts: await this.api.getPosts(), showPosts: true});
        }, 500);
    }

    render() {
        const {posts, showPosts} = this.state;

        return (
            <>
                { !showPosts && <div className={spinner.loader}>Loading...</div> }

                { showPosts &&
                    <div>
                        {
                            posts.map(post => <SinglePost post={post} key={post.id}/>)
                        }
                    </div>
                }
            </>
        );
    }
}

export default AllPosts;
