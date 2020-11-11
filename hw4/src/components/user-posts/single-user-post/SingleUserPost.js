import {NavLink, withRouter} from "react-router-dom";
import React, {Component} from 'react';

import s from "../../../common-styles/LinkView.module.css";

class SingleUserPost extends Component {

    render() {
        const {url} = this.props.match;
        const {id, title} = this.props.post;

        return <NavLink to={`${url}/post/${id}`} className={s.innerLinkView}>{id}. {title}</NavLink>
    }
}

export default withRouter(SingleUserPost);
