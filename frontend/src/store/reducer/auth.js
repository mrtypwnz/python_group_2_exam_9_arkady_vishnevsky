import {LOGIN_SUCCESS} from "../actions/login";
import {LOGOUT} from "../actions/logout";

const initialState = {};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return action.data;
        case LOGOUT:
            return {};
        default:
            return state;
    }
};


export default authReducer;