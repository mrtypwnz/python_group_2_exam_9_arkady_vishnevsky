import {PRODUCT_LOAD_SUCCESS} from "../actions/product-detail";

const initialState = {
    products: null
};

const productDetailReducer = (state = initialState, action) => {
    switch (action.type) {
        case PRODUCT_LOAD_SUCCESS:
            return {...state, products: action.products};
        default:
            return state
    }
};

export default productDetailReducer;