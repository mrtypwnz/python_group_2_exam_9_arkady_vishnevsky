import {combineReducers} from 'redux'
import productListReducer from './product-list'
import productDetailReducer from './product-detail'
import loginReducer from './login'
import authReducer from './auth'


const rootReducer = combineReducers({
    login: loginReducer,
    // register: registerReducer,
    auth: authReducer,
    // app: tokenLoginReducer,
    productList: productListReducer,
    productDetail: productDetailReducer
});

export default rootReducer;