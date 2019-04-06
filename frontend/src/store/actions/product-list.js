import {PRODUCTS_URL} from "../../api-urls";
import axios from 'axios';

export const PRODUCT_LIST_REQUEST_SUCCESS = "PRODUCT_LIST_REQUEST_SUCCESS";


export const loadProducts = () => {
    return dispatch => {
        axios.get(PRODUCTS_URL)
            .then(response => {
                console.log(response.data);
                return dispatch({type: PRODUCT_LIST_REQUEST_SUCCESS, products: response.data});
            })
            .catch(error => console.log(error));
    }
};