import { makeAutoObservable } from "mobx";

export default class ProductStore {
    constructor() {
        this._categories = [
            { id: 1, name: "Для него" },
            { id: 2, name: "Для неё" },
            { id: 3, name: "Аксессуары" },
        ];
        this._products = [
            {
                id: 1,
                name: "Футболка черная HARD STYLE",
                urlImg1: "item.jpg",
                urlImg2: "item_2.jpg",
                price: 1000,
                isDiscount: false,
                priceWithoutDiscount: 0,
            },
            {
                id: 2,
                name: "Футболка черная HARD STYLE",
                urlImg1: "item.jpg",
                urlImg2: "item_2.jpg",
                price: 2000,
                isDiscount: true,
                priceWithoutDiscount: 3500,
            },
            {
                id: 3,
                name: "Футболка белая HARD STYLE",
                urlImg1: "item.jpg",
                urlImg2: "item_2.jpg",
                price: 3000,
                isDiscount: false,
                priceWithoutDiscount: 0,
            },
        ];
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
