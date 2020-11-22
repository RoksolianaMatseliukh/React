import {ITEM_IN_WISH_LIST_TOGGLE} from "../action-types";

const initialState = {
    wishList: []
};

export const wishListReducer = (state = initialState, action) => {
    switch (action.type) {

        case ITEM_IN_WISH_LIST_TOGGLE:
            const newWishList = state.wishList.filter(item => item.id !== action.payload.id);

            if (newWishList.length === state.wishList.length) {
                newWishList.push(action.payload);
            }

            return { wishList: newWishList };

        default:
            return state;
    }
};
