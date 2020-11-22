import {LOAD_PRODUCTS_BY_CATEGORY} from "../action-types";

const initialState = {
    products: []
};

export const productsByCategoryReducer = (state = initialState, action) => {
    switch (action.type) {

        case LOAD_PRODUCTS_BY_CATEGORY:
            return { products: action.payload };

        default:
            return state;
    }
};
