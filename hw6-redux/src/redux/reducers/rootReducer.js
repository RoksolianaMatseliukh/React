import {combineReducers} from "redux";

import {cartReducer} from './cartReducer';
import {productsByCategoryReducer} from './productsByCategoryReducer';
import {wishListReducer} from './wishListReducer';

export default combineReducers({
    cartReducer, productsByCategoryReducer, wishListReducer
});
