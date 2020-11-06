import React, {Component} from 'react';
import {withRouter} from "react-router-dom";

import SingleFoundUser from "../single-found-user/SingleFoundUser";
import {UserService} from "../../services/UserService";

class SearchedFormById extends Component {

    api = new UserService();
    previousId = '';
    state = {user: {}, warning: false};

    render() {
        return (
            <div>
                <h3> search user by id: </h3>

                <form>
                    <input type="number" value={this.state.id} placeholder={'enter id'} onChange={this.onInputSearchUser}/>
                </form>

                { this.state.warning && <p style={{color: 'red'}}> there is no user with this id </p> }

                { (!this.state.warning && this.state.user.id) && <SingleFoundUser singleFoundUser={this.state.user}/> }
            </div>
        );
    }

    onInputSearchUser = async (e) => {
        if (!e.target.value) {
            this.setState({user: {}, warning: false});
            this.props.history.push('/');
            return;
        }

        if (e.target.value > 10 || e.target.value < 1) {
            this.setState({warning: true});
            this.props.history.push('/');
            return;
        }

        if (this.previousId !== e.target.value) {
            this.setState({user: await this.api.getSingleUser(e.target.value), warning: false});
            this.props.history.push('/');
            return;
        }

        this.setState({user: await this.api.getSingleUser(e.target.value), warning: false});
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.previousId = prevState;
    }
}

export default withRouter(SearchedFormById);
