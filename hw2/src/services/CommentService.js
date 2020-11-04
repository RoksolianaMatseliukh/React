
export class CommentService {
    _url = 'https://jsonplaceholder.typicode.com/comments';

    async getComments() {
        return (await fetch(this._url)).json();
    }

    async getFullComment(commentId) {
        return (await fetch(`${this._url}/${commentId}`)).json();
    }
}
