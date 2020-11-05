
export class UserService {
    _url = 'https://jsonplaceholder.typicode.com/users';

    async getUsers() {
        return (await fetch(this._url)).json();
    }

    async getFullUser(userId) {
        return (await fetch(`${this._url}/${userId}`)).json();
    }

    async getUserPosts(userId) {
        return (await fetch(`${this._url}/${userId}/posts`)).json();
    }
}
