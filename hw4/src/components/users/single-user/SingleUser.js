import {NavLink, withRouter} from "react-router-dom";
import React, {Component} from 'react';

import s from '../../../common-styles/LinkView.module.css';

class SingleUser extends Component {

    render() {
        const url = this.props.match.url;
        const {id, name} = this.props.user;

        return <NavLink to={`${url}/${id}`} className={s.linkView}> {id}. {name} </NavLink>
    }
}

export default withRouter(SingleUser);
