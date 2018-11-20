import React from 'react';
import { connect } from 'react-redux';
import  { Route } from 'react-router-dom';
import Header from '../components/Header';

export const PublicRoute = ({  
    component: Component,
    navName,
    ...rest
}) => (
    <Route {...rest} component={(props) => (
        <div className={navName}>
            <Header />
            <Component {...props} />
        </div>
    )} />
);

export default connect()(PublicRoute);