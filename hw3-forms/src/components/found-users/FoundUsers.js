import React, {Component} from 'react';

import s from "../searched-form-by-id/SearchedFormById.module.css";
import SingleFoundUser from "../single-found-user/SingleFoundUser";

class FoundUsers extends Component {

    render() {
        const {foundUsers} = this.props;

        return (
            <div>
                {
                    !foundUsers.length && <p className={s.warningView}> there is no user with this name </p>
                }

                {
                    foundUsers.map(user => <SingleFoundUser key={user.id} singleFoundUser={user}/>)
                }
            </div>
        );
    }
}

export default FoundUsers;
