import React from 'react';
import { connect } from 'react-redux';
import  { Route, Redirect } from 'react-router-dom';

export const LoginRoute = ({ 
    isAuthenticated, 
    component: Component,
    ...rest
}) => (
    <Route {...rest} component={(props) => (
        isAuthenticated ? (
            <Redirect to="/admin" />
        ) : (
            <Component {...props} />
        )
    )} />
);

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.email
});

export default connect(mapStateToProps)(LoginRoute);