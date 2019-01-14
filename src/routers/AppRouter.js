import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import AdminPage from '../pages/AdminPage';
import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';
import EventInfoPage from '../pages/EventInfoPage';
import RSVPPage from '../pages/RSVPPage';
import RegistryPage from '../pages/RegistryPage';
import NotFoundPage from '../pages/NotFoundPage';
import AddGuestPage from '../pages/AddGuestPage';
import EditGuestPage from '../pages/EditGuestPage';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import LoginRoute from  './LoginRoute';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <Route exact path="/" render={() => ( <Redirect to="/home" /> )} />
                <PublicRoute path="/home" navName="home" component={HomePage} />
                <PublicRoute path="/info" navName="info" component={EventInfoPage} />
                <PublicRoute path="/rsvp" navName="rsvp" component={RSVPPage} />
                <PublicRoute path="/registry" navName="registry" component={RegistryPage} />
                <PrivateRoute path="/admin" component={AdminPage} exact={true} />
                <PrivateRoute path="/admin/add" component={AddGuestPage} />
                <PrivateRoute path="/admin/edit/:id" component={EditGuestPage} />
                <LoginRoute path="/login" component={LoginPage} />
                <Route render={() => ( <Redirect to="/home" /> )} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;