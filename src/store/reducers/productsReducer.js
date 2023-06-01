import {
    SET_CATEGORIES,
    SET_LIMIT,
    SET_PRODUCTS,
    SET_TOTAL_COUNT,
} from "../actions/productsActionsTypes";

const defaultState = [];

export const ProductsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_CATEGORIES:
            return;
        case SET_PRODUCTS:
            return;
        case SET_TOTAL_COUNT:
            return;
        case SET_LIMIT:
            return;
        default:
            return state;
    }
};
