import { LOGOUT_USER, SET_USER } from "../actions/userActionsTypes.js";

const defaultState = null;

export const UserReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                id: action.payload.id,
                username: action.payload.username,
                email: action.payload.email,
                role: action.payload.role,
                avatarURL: action.payload.avatar,
            };
        case LOGOUT_USER:
            return null;
        default:
            return state;
    }
};
