import React from "react";
import {useSelector} from "react-redux";
import {withRouter} from "react-router-dom";

import {CartItem} from "./cart-item/CartItem";
import s from './Cart.module.css';

const Cart = ({history}) => {

    const cart = useSelector(({cartReducer: {cart}}) => cart);

    const getAdditionalInfo = () => {
        if (cart.length) {

            const totalAmountOfGoods = cart.reduce((acc, {price, quantity}) => acc + (price * quantity), 0);
            const goodsQuantity = cart.reduce((acc, {quantity}) => acc + quantity, 0);

            return (
                <>
                    <h4> Goods in cart: { goodsQuantity } </h4>
                    <h5> The total amount of good(s): { totalAmountOfGoods } $ </h5>
                </>
            );
        }

        return <h4> Your cart is empty. </h4>;
    };

    return (
        <div className={s.rearView}
             onClick={() => history.goBack()}>

            <div className={s.cartWrapperView}
                 onClick={(e) => e.stopPropagation()}>

                <div className={s.titleView}>
                    <div> { getAdditionalInfo() } </div>

                    <span className={`material-icons ${s.closeIcon}`}
                          onClick={() => history.goBack()}
                          title="close cart">
                        close
                    </span>
                </div>
                <hr/>

                <div className={s.cartView}>
                    { cart.map(item => <CartItem key={item.id} item={item}/>) }
                </div>

            </div>

        </div>
    );
};

export const CartWrapper = withRouter(Cart);
