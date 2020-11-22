import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {fetchProductsByCategory, itemInCartToggle, itemInWishListToggle} from "../../redux/actions";
import {ProductItem} from "./product-item/ProductItem";

export const ProductListByCategory = ({match: {params: {nameOfCategory}}}) => {

    const products = useSelector(({productsByCategoryReducer: {products}}) => products);
    const cart = useSelector(({cartReducer: {cart}}) => cart);
    const wishList = useSelector(({wishListReducer: {wishList}}) => wishList);
    const dispatch = useDispatch();

    useEffect(() => {
        fetchProductsByCategory(dispatch, nameOfCategory);
    }, [nameOfCategory]);

    const itemInCart = (product) => {
        dispatch(itemInCartToggle(product));
    };

    const itemInWishList = (product) => {
        dispatch(itemInWishListToggle(product));
    };

    return(
        <>
            {
                products.map(product => <ProductItem key={product.id}
                                                     product={product}
                                                     isItemInCart={cart.find(item => item.id === product.id)}
                                                     isItemInWishList={wishList.find(item => item.id === product.id)}
                                                     itemInCart={itemInCart}
                                                     itemInWishList={itemInWishList} />)
            }
        </>
    );
};
