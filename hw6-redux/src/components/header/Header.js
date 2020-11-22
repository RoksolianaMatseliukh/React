import {NavLink, withRouter} from "react-router-dom";
import React from "react";
import {useSelector} from "react-redux";

import s from './Header.module.css';
import wish_list from '../../images/wish_list.png';

const Header = ({history}) => {

    const cart = useSelector(({cartReducer: {cart}}) => cart);
    const wishList = useSelector(({wishListReducer: {wishList}}) => wishList);

    return (
        <>
            <div className={s.listOfLinks}>
                <NavLink exact to="/"
                         className={s.linkView}
                         activeClassName={s.activeLinkView}>
                    HOME
                </NavLink>

                <NavLink to="/all_products"
                         className={`${s.linkView} ${s.btnMargin}`}
                         activeClassName={s.activeLinkView}>
                    All PRODUCTS
                </NavLink>

                <NavLink to="/category/electronics"
                         className={`${s.linkView} ${s.btnMargin}`}
                         activeClassName={s.activeLinkView}>
                    ELECTRONICS
                </NavLink>

                <NavLink to="/category/jewelery"
                         className={`${s.linkView} ${s.btnMargin}`}
                         activeClassName={s.activeLinkView}>
                    JEWELERY
                </NavLink>

                <NavLink to="/category/men clothing"
                         className={`${s.linkView} ${s.btnMargin}`}
                         activeClassName={s.activeLinkView}>
                    MEN CLOTHING
                </NavLink>

                <NavLink to="/category/women clothing"
                         className={`${s.linkView} ${s.btnMargin}`}
                         activeClassName={s.activeLinkView}>
                    WOMEN CLOTHING
                </NavLink>
            </div>
            <hr/>

            <div className={s.iconsView}>
                <>
                    <span className="material-icons"
                          onClick={() => history.push('/cart')}
                          title="cart">
                        shopping_cart
                    </span>
                    { cart.reduce((acc, {quantity}) => acc + quantity, 0) }
                </>

                <>
                    <img src={wish_list}
                         alt="wish_list_image"
                         onClick={() => history.push('/wish_list')}
                         title="wish list"/>
                    { wishList.length }
                </>
            </div>
        </>
    );
};

export const HeaderWrapper = withRouter(Header);
