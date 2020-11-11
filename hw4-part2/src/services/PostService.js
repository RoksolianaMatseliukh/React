
export class PostService {
    _url = 'https://jsonplaceholder.typicode.com/posts';

    async getPosts() {
        return (await fetch(this._url)).json();
    }

    async getFullPost(postId) {
        return (await fetch(`${this._url}/${postId}`)).json();
    }

    async getPostComments(postId) {
        return (await fetch(`${this._url}/${postId}/comments`)).json();
    }
}
