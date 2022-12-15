import { makeAutoObservable } from "mobx";

export default class ProductStore {
    constructor() {
        this._categories = [];
        this._products = [];
        this._page = 1;
        this._totalCount = 0;
        this._limit = 12;
        makeAutoObservable(this);
    }
    setCategories(categories) {
        this._categories = categories;
    }
    setProducts(products) {
        this._products = products;
    }
    setPage(page) {
        this._page = page;
    }
    setTotalCount(totalCount) {
        this._totalCount = totalCount;
    }
    setLimit(limit) {
        this._limit = limit;
    }
    get page() {
        return this._page;
    }
    get totalCount() {
        return this._totalCount;
    }
    get limit() {
        return this._limit;
    }
    get categories() {
        return this._categories;
    }
    get products() {
        return this._products;
    }
}
