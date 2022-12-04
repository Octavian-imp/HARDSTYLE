import { makeAutoObservable } from "mobx";

export default class ProductStore {
    constructor() {
        this._categories = [];
        this._products = [];
        makeAutoObservable(this);
    }
    setCategories(categories) {
        this._categories = categories;
    }
    setProducts(products) {
        this._products = products;
    }
    get categories() {
        return this._categories;
    }
    get products() {
        return this._products;
    }
}
