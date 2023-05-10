import { CREATE_PRODUCTS,RETRIEVE_PRODUCTS } from "../actions/type";


const initialState = [];


export function roductReducer(products = initialState, action) {
    const { type, payload } = action;


    switch (type) {
        case CREATE_PRODUCTS:
            return [...products, payload];
        case RETRIEVE_PRODUCTS:
            return payload;
    
        default:
            break;
    }
}