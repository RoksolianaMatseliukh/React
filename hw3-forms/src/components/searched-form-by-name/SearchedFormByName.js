import React, {Component} from 'react';
import {withRouter} from "react-router-dom";

import FoundUsers from "../found-users/FoundUsers";

class SearchedFormByName extends Component {

    previousName = '';
    state = {name: ''};

    render() {

        return (
            <div>
                <h3> search user(s) by name: </h3>

                <form>
                    <input type="text" value={this.state.name} onChange={this.onInputSearchUser}/>
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
