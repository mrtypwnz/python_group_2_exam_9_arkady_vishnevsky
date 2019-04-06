import React from 'react';
import {Redirect, Route} from 'react-router';
import {connect} from "react-redux";

const AuthRoute = (props) => {
    if(props.app.loading) {
        return <p>Loading, please wait.</p>
    }
    if(props.auth.user_id) {
        return <Route {...props} />
    }
        return <Redirect to={{
            pathname: "/login",
            state: {next: props.location}
        }}/>
    };

const mapStateToProps = state => ({auth: state.auth, app: state.app});
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(AuthRoute);