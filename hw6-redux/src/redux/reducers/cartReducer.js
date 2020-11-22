import {
    DECREASE_ITEM_QUANTITY,
    INCREASE_ITEM_QUANTITY,
    ITEM_IN_CART_TOGGLE
} from "../action-types";

const initialState = {
    cart: []
};

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {

        case ITEM_IN_CART_TOGGLE:
            const newCart = state.cart.filter(item => item.id !== action.payload.id);

            if (newCart.length === state.cart.length) {
                newCart.push({...action.payload, quantity: 1});
            }

            return { ...state, cart: newCart };

        case INCREASE_ITEM_QUANTITY:

            const cartWithIncQuantity = state.cart.map(item => {
                if (item.id === action.payload.id) {
                    return { ...item, quantity: item.quantity + 1 };
                }
                return item;
            });

            return { ...state, cart: cartWithIncQuantity };

        case DECREASE_ITEM_QUANTITY:

            const foundItem = state.cart.find(item => item.quantity === 1);

            if (foundItem) {
                return { ...state };
            }

            const cartWithDecQuantity = state.cart.map(item => {
                if (item.id === action.payload.id) {
                    return { ...item, quantity: item.quantity - 1 };
                }
                return item;
            });

            return { ...state, cart: cartWithDecQuantity };

        default:
            return state;
    }
};
