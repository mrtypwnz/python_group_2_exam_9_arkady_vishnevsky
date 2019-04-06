import axios from 'axios';
import {PRODUCTS_URL} from "../../api-urls";

export const PRODUCT_LOAD_SUCCESS = 'PRODUCT_LOAD_SUCCESS';

export const loadProduct = (id) => {
    return dispatch => {
        axios.get(PRODUCTS_URL + id).then(response => {
            console.log(response.data);
            return dispatch({type: PRODUCT_LOAD_SUCCESS, products: response.data})
        }).catch((error => {
            console.log(error);
            console.log(error.response)
        }))
    }
};