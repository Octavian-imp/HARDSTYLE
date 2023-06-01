import {
    ADD_QUANTITY,
    ADD_TO_CART,
    EMPTY_CART,
    REMOVE_FROM_CART,
    SUB_QUANTITY,
} from "../actions/cartActionsTypes.js";

const defaultState = [];

export const CartReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return [...state, state.push(action.payload)];
        case REMOVE_FROM_CART:
            return [
                ...state,
                state.filter((item) => item.id !== action.payload.id),
            ];
        case ADD_QUANTITY:
            return [
                ...state,
                state.map((item) =>
                    item.id === action.payload.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                ),
            ];
        case SUB_QUANTITY:
            return [
                ...state,
                state.map((item) =>
                    item.id === action.payload.id
                        ? {
                              ...item,
                              quantity:
                                  item.quantity !== 1 ? item.quantity - 1 : 1,
                          }
                        : item
                ),
            ];
        case EMPTY_CART:
            return [];
        default:
            return state;
    }
};
