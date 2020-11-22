import React from "react";
import {useDispatch} from "react-redux";

import {itemInWishListToggle} from "../../../redux/actions";
import s from '../../cart/cart-item/CartItem.module.css';

export const WishListItem = ({item}) => {

    const {title, price, image} = item;
    const dispatch = useDispatch();

    return (
        <div className={s.productView}>
            <span className={`material-icons ${s.deletedIcon}`}
                  onClick={() => dispatch(itemInWishListToggle(item))}
                  title="remove from wish list">
                delete_forever
            </span>

            <b> {title} </b> <br/>

            <span> {price} $ </span> <br/> <br/>

            <img src={image} alt="some_product"/>
        </div>
    );
};

