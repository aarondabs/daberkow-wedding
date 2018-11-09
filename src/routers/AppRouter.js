import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import AdminPage from '../components/AdminPage';
import LoginPage from '../components/LoginPage';
import HomePage from '../components/HomePage';
import EventInfoPage from '../components/EventInfoPage';
import RSVPPage from '../components/RSVPPage';
import RegistryPage from '../components/RegistryPage';
import NotFoundPage from '../components/NotFoundPage';
import AddGuestPage from '../components/AddGuestPage';
import EditGuestPage from '../components/EditGuestPage';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import LoginRoute from  './LoginRoute';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <Route exact path="/" render={() => ( <Redirect to="/home" /> )} />
                <PublicRoute path="/home" component={HomePage} />
                <PublicRoute path="/info" component={EventInfoPage} />
                <PublicRoute path="/rsvp" component={RSVPPage} />
                <PublicRoute path="/registry" component={RegistryPage} />
                <PrivateRoute path="/admin" component={AdminPage} exact={true} />
                <PrivateRoute path="/admin/add" component={AddGuestPage} />
                <PrivateRoute path="/admin/edit/:id" component={EditGuestPage} />
                <LoginRoute path="/login" component={LoginPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;