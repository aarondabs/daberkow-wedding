import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import HomePage from '../components/HomePage';
import EventInfoPage from '../components/EventInfoPage';
import RSVPPage from '../components/RSVPPage';
import RegistryPage from '../components/RegistryPage';
import NotFoundPage from '../components/NotFoundPage';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path="/home" component={HomePage} />
                <PublicRoute path="/info" component={EventInfoPage} />
                <PublicRoute path="/rsvp" component={RSVPPage} />
                <PublicRoute path="/registry" component={RegistryPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;