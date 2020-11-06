import React, {Component} from 'react';
import {withRouter} from "react-router-dom";

import FoundUsers from "../found-users/FoundUsers";
import s from './../searched-form-by-id/SearchedFormById.module.css';

class SearchedFormByName extends Component {

    previousName = '';
    state = {name: ''};

    render() {

        return (
            <div>
                <h3 className={s.titleView}> search user(s) by name: </h3>

                <form>
                    <div className="form-group w-60">
                        <input type="text"
                               value={this.state.name}
                               className="form-control"
                               placeholder="enter name"
                               onChange={this.onInputSearchUser}/>
                    </div>
                </form>

                { this.state.name && <FoundUsers name={this.state.name}/> }
            </div>
        );
    }

    onInputSearchUser = (e) => {
        if (!e.target.value || this.previousName !== e.target.value) {
            this.setState({name: e.target.value});
            this.props.history.push('/');
            return;
        }

        this.setState({name: e.target.value});
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.previousName = prevState;
    }
}

export default withRouter(SearchedFormByName);
