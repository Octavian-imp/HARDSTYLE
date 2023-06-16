import {
    ADD_TO_CART,
    DEC_COUNT,
    EMPTY_CART,
    INC_COUNT,
    REMOVE_FROM_CART,
} from "../actions/cartActionsTypes.js"

const defaultState = [
    // {
    //     id: null,
    //     name: null,
    //     price: null,
    //     imgUrl: null,
    //     size: null,
    //     count: null,
    // },
]

export const CartReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            if (state.indexOf(action.payload) === -1) {
                return [...state, action.payload]
            }
            return state
        case REMOVE_FROM_CART:
            return state.filter((item) => {
                if (
                    item.id === action.payload.id &&
                    item.size === action.payload.size
                ) {
                    return false
                }
                return true
            })
        case INC_COUNT:
            return state.map((item) => {
                if (
                    item.id === action.payload.id &&
                    item.size === action.payload.size
                ) {
                    return { ...item, count: item.count + 1 }
                }
                return item
            })
        case DEC_COUNT:
            return state.map((item) => {
                if (
                    item.id === action.payload.id &&
                    item.size === action.payload.size &&
                    item.count > 1
                ) {
                    return { ...item, count: item.count - 1 }
                }
                return item
            })
        case EMPTY_CART:
            return []
        default:
            return state
    }
}
