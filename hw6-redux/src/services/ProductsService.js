
class ProductsService {

    _url = 'https://fakestoreapi.com/products';

    async getAllProducts() {
        return (await fetch(this._url)).json();
    }

    async getProductsByCategory(category) {
        return (await fetch(`${this._url}/category/${category}`)).json();
    }
}

export const apiService = new ProductsService();
