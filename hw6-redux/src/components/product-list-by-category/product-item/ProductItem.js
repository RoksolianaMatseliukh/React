import React from "react";
import {useDispatch, useSelector} from "react-redux";

import {itemInCartToggle, itemInWishListToggle} from "../../../redux/actions";
import s from './ProductItem.module.css';

export const ProductItem = ({product}) => {

    const {id, title, price, description, image} = product;
    const dispatch = useDispatch();
    const cart = useSelector(({cartReducer: {cart}}) => cart);
    const wishList = useSelector(({wishListReducer: {wishList}}) => wishList);

    const isItemInCartWishList = () => {
        const isItemInCart = cart.find(item => item.id === id);
        const isItemInWishList = wishList.find(item => item.id === id);

        return (
            <>
                <span className={`material-icons ${ isItemInCart ? s.removeFromCart : s.addToCart }`}
                      onClick={() => dispatch(itemInCartToggle(product))}
                      title={ isItemInCart ? 'remove from cart' : 'add to cart' }>
                    { isItemInCart ? 'remove_shopping_cart' : 'add_shopping_cart' }
                </span>

                <span className={`material-icons ${s.favorite}`}
                      onClick={() => dispatch(itemInWishListToggle(product))}
                      title={ isItemInWishList ? 'remove from wish list' : 'add to wish list' }>
                    { isItemInWishList ? 'favorite' : 'favorite_border' }
                </span>
            </>
        );
    };

    return (
        <div className={s.productView}>
            <h4> {title} { isItemInCartWishList() } </h4>
            {price} $ <br/>
            <b> description: </b> {description} <br/> <br/>
            <img src={image} alt="some_product"/>
        </div>
    );
};
