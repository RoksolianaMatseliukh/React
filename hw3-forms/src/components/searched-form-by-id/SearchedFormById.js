import React, {Component} from 'react';
import {withRouter} from "react-router-dom";

import s from './SearchedFormById.module.css';
import SingleFoundUser from "../single-found-user/SingleFoundUser";
import {UserService} from "../../services/UserService";

class SearchedFormById extends Component {

    api = new UserService();
    previousId = '';
    state = {user: {}, warning: false};

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

    submitSearch = (e) => {
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <h3 className={s.titleView}> search user by id: </h3>

                <form onSubmit={this.submitSearch}>
                    <div className="form-group w-60">
                        <input type="number"
                               value={this.state.id}
                               className="form-control"
                               placeholder="enter id"
                               onChange={this.onInputSearchUser}/>
                    </div>
                </form>

                { this.state.warning && <p className={s.warningView}> there is no user with this id </p> }

                { (!this.state.warning && this.state.user.id) && <SingleFoundUser singleFoundUser={this.state.user}/> }
            </div>
        );
    }
}

export default withRouter(SearchedFormById);
