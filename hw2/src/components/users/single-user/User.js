import React, {Component} from 'react';

import s from './User.module.css';
import FullUser from "../full-user-info/FullUser";

class User extends Component {

    state = {showFullUser: false};

    showHideFullUser = () => {
        this.setState({showFullUser: !this.state.showFullUser});
    }

    render() {
        const {id, name} = this.props.user;

        return (
            <div>
                <h5> {id}. {name} </h5>

                {
                    !this.state.showFullUser &&
                    <button className={`btn btn-info btn-sm ${s.btnShow}`}
                            onClick={this.showHideFullUser}>
                        show full user
                    </button>
                }

                { this.state.showFullUser && <FullUser userId={id} getTopUser={this.props.getTopUser}/> }

                {
                    this.state.showFullUser &&
                    <button className={`btn btn-outline-secondary btn-sm ${s.btnHide}`}
                            onClick={this.showHideFullUser}>
                        hide full user
                    </button>
                }
            </div>
        );
    }
}

export default User;
