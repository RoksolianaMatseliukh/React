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

            const cartForIncQuantity = [...state.cart];
            const itemForIncQuantity = cartForIncQuantity.find(item => (item.id === action.payload.id));
            itemForIncQuantity.quantity += 1;

            return { ...state, cart: cartForIncQuantity };

        case DECREASE_ITEM_QUANTITY:

            const cartForDecQuantity = [...state.cart];
            const itemForDecQuantity = cartForDecQuantity.find(item => (item.id === action.payload.id));

            if (itemForDecQuantity.quantity === 1) {
                return { ...state, cart: cartForDecQuantity };
            }

            itemForDecQuantity.quantity -= 1;

            return { ...state, cart: cartForDecQuantity };

        default:
            return state;
    }
};
