import {PRODUCT_LIST_REQUEST_SUCCESS} from "../actions/product-list";

const initialState = {
    products: [],
};

const productListReducer = (state = initialState, action) => {
    switch (action.type) {
        case PRODUCT_LIST_REQUEST_SUCCESS:
            return {...state, products: action.products};
        default:
            return state;
    }
};

export default productListReducer;