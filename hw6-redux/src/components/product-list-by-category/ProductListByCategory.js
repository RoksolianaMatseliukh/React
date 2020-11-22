import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {fetchProductsByCategory} from "../../redux/actions";
import {ProductItem} from "./product-item/ProductItem";

export const ProductListByCategory = ({match: {params: {nameOfCategory}}}) => {

    const products = useSelector(({productsByCategoryReducer: {products}}) => products);
    const dispatch = useDispatch();

    useEffect(() => {
        fetchProductsByCategory(dispatch, nameOfCategory);
    }, [nameOfCategory]);

    return <> { products.map(product => <ProductItem key={product.id} product={product}/>) } </>;
};
