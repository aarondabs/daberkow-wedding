import React from 'react';
import { connect } from 'react-redux';
import  { Route, Redirect } from 'react-router-dom';
import AdminHeader from '../components/AdminHeader';

export const PrivateRoute = ({ 
    isAuthenticated, 
    component: Component,
    ...rest
}) => (
    <Route {...rest} component={(props) => (
        isAuthenticated ? (
            <div>
                <AdminHeader />
                <Component {...props} />
            </div>
        ) : (
            <Redirect to="/login" />
        )
    )} />
);

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.email
});

export default connect(mapStateToProps)(PrivateRoute);