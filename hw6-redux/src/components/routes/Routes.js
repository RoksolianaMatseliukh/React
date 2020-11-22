import React from "react";
import {Route, Switch} from "react-router-dom";

import {CartWrapper} from "../cart/Cart";
import {Home} from "../home/Home";
import {ProductListByCategory} from "../product-list-by-category/ProductListByCategory";
import {UnknownPage} from "../unknown-page/UnknownPage";
import {WishListWrapper} from "../wish-list/WishList";

export const Routes = () => (
    <Switch>
        <Route path="/category/:nameOfCategory" exact component={ProductListByCategory} />
        <Route path="/all_products" exact component={ProductListByCategory} />
        <Route path="/wish_list" exact component={WishListWrapper} />
        <Route path="/cart" exact component={CartWrapper} />
        <Route path="/" exact component={Home} />

        <Route component={UnknownPage}/>
    </Switch>
);
