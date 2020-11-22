import React from "react";
import {useSelector} from "react-redux";
import {withRouter} from "react-router-dom";

import s from './WishList.module.css';
import {WishListItem} from "./wish-list-item/WishListItem";

const WishList = ({history}) => {

    const wishList = useSelector(({wishListReducer: {wishList}}) => wishList);

    const getAdditionalInfo = () => {
        if (wishList.length) {

            return <h4> Goods in wish list: { wishList.length } </h4>;
        }

        return <h4> Your wish list is empty. </h4>;
    };

    return (
        <div className={s.rearView}
             onClick={() => history.goBack()}>

            <div className={s.wishListWrapperView}
                 onClick={(e) => e.stopPropagation()}>

                <div className={s.titleView}>
                    <div> { getAdditionalInfo() } </div>

                    <span className={`material-icons ${s.closeIcon}`}
                          onClick={() => history.goBack()}
                          title="close wish list">
                        close
                    </span>
                </div>
                <hr/>

                <div className={s.wishListView}>
                    { wishList.map(item => <WishListItem key={item.id} item={item}/>) }
                </div>

            </div>

        </div>
    );
};

export const WishListWrapper = withRouter(WishList);
