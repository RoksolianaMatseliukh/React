import {NavLink, withRouter} from "react-router-dom";
import React, {Component} from 'react';

import s from '../../../common-styles/LinkView.module.css';

class SinglePost extends Component {

    render() {
        const url = this.props.match.url;
        const {id, title} = this.props.post;

        return <NavLink to={`${url}/${id}`} className={s.linkView}> {id}. {title} </NavLink>
    }
}

export default withRouter(SinglePost);
