import {
    DECREASE_ITEM_QUANTITY,
    INCREASE_ITEM_QUANTITY,
    ITEM_IN_CART_TOGGLE, ITEM_IN_WISH_LIST_TOGGLE,
    LOAD_PRODUCTS_BY_CATEGORY
} from "../action-types";
import {ProductsService} from "../../services/ProductsService";

export const loadProductsByCategory = payload => ({ type: LOAD_PRODUCTS_BY_CATEGORY, payload });

export const fetchProductsByCategory = async (dispatch, category) => {
    const api = new ProductsService();

    if (!category) {

        const allProducts = await api.getAllProducts();
        dispatch(loadProductsByCategory(allProducts));
        return;
    }

    const products = await api.getProductsByCategory(category);
    dispatch(loadProductsByCategory(products));
};

export const itemInCartToggle = payload => ({ type: ITEM_IN_CART_TOGGLE, payload });

export const increaseItemQuantity = payload => ({ type: INCREASE_ITEM_QUANTITY, payload });

export const decreaseItemQuantity = payload => ({ type: DECREASE_ITEM_QUANTITY, payload });

export const itemInWishListToggle = payload => ({ type: ITEM_IN_WISH_LIST_TOGGLE, payload });
