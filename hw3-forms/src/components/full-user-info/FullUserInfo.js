import React, {Component} from 'react';
import {withRouter} from "react-router-dom";

import s from "./FullUserInfo.module.css";

class FullUserInfo extends Component {

    render() {
        const {match: {params: {id}}} = this.props;
        const {id: uId, name, username, email, address: {street} = {}, phone} = this.props.fullUserInfo;

        return (
            <div>
                {(uId === +id) && (
                    <div className={s.foundUser}>
                        {uId}. {name} <hr/>
                        {username} <br/>
                        {email} <br/>
                        {street} <br/>
                        {phone}
                    </div>
                )}
            </div>
        );
    }
}

export default withRouter(FullUserInfo);
