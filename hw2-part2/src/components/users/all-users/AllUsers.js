import React, {Component} from 'react';
import {UserService} from "../../../services/UserService";
import {withRouter} from "react-router-dom";
import SingleUser from "../single-user/SingleUser";
import spinner from '../../../common-styles/Spinner.module.css';

class AllUsers extends Component {

    api = new UserService();
    state = {users: [], showUsers: false};

    componentDidMount() {
        setTimeout(async () => {
            this.setState({users: await this.api.getUsers(), showUsers: true});
        }, 500);
    }

    render() {
        return (
            <div>
                { !this.state.showUsers && <div className={spinner.loader}>Loading...</div> }

                { this.state.showUsers && (
                    <div>
                        {
                            this.state.users.map(user => <SingleUser user={user} key={user.id}/>)
                        }
                    </div>
                )
                }
            </div>
        );
    }
}

export default withRouter(AllUsers);
