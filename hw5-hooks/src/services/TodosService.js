
export class TodosService {
    _url = 'https://jsonplaceholder.typicode.com/todos';

    async getAllTodos() {
        return (await fetch(`${this._url}`)).json();
    }

    async getFoundTodoById(todoId) {
        return (await fetch(`${this._url}/${todoId}`)).json();
    }
}
