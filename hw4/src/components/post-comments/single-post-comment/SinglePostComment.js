import {NavLink, withRouter} from "react-router-dom";
import React, {Component} from 'react';

import s from '../../../common-styles/LinkView.module.css';

class SinglePostComment extends Component {

    render() {
        const {url} = this.props.match;
        const {id, name} = this.props.comment;

        return <NavLink to={`${url}/comment/${id}`} className={s.innerLinkView}>{id}. {name}</NavLink>
    }
}

export default withRouter(SinglePostComment);
