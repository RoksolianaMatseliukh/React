import React from "react";
import {useDispatch} from "react-redux";

import {decreaseItemQuantity, increaseItemQuantity, itemInCartToggle} from "../../../redux/actions";
import s from './CartItem.module.css';

export const CartItem = ({item}) => {

    const {title, price, quantity, image} = item;
    const dispatch = useDispatch();

    return (
        <div className={s.productView}>
            <span className={`material-icons ${s.deletedIcon}`}
                  onClick={() => dispatch(itemInCartToggle(item))}
                  title="remove from cart">
                delete_forever
            </span>

            <b> {title} </b> <br/>
            {price} $ <br/>

            quantity: <span className={s.minus}
                            onClick={() => dispatch(decreaseItemQuantity(item))}
                            title="decrease quantity">
                          —
                      </span>

            <span className={s.quantity}> {quantity} </span>

            <span className={s.plus}
                  onClick={() => dispatch(increaseItemQuantity(item))}
                  title="increase quantity">
                +
            </span> <br/> <br/>

            <img src={image} alt="some_product"/>
        </div>
    );
};

