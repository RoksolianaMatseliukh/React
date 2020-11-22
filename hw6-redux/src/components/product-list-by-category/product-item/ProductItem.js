import React from "react";

import s from './ProductItem.module.css';

export const ProductItem = ({product, isItemInCart, isItemInWishList, itemInCart, itemInWishList}) => {

    const {title, price, description, image} = product;

    const isItemInCartWishList = () => (
        <>
            <span className={`material-icons ${ isItemInCart ? s.removeFromCart : s.addToCart }`}
                  onClick={() => itemInCart(product)}
                  title={ isItemInCart ? 'remove from cart' : 'add to cart' }>
                { isItemInCart ? 'remove_shopping_cart' : 'add_shopping_cart' }
            </span>

            <span className={`material-icons ${s.favorite}`}
                  onClick={() => itemInWishList(product)}
                  title={ isItemInWishList ? 'remove from wish list' : 'add to wish list' }>
                { isItemInWishList ? 'favorite' : 'favorite_border' }
            </span>
        </>
    );

    return (
        <div className={s.productView}>
            <h4> {title} { isItemInCartWishList() } </h4>
            {price} $ <br/>
            <b> description: </b> {description} <br/> <br/>
            <img src={image} alt="some_product"/>
        </div>
    );
};
