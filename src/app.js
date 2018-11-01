import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { login, logout } from './actions/auth';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import { firebase } from './firebase/firebase';
import LoadingPage from './components/LoadingPage'

const store = configureStore();
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);
let hasRendered = false;
const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered = true;
    }
};

ReactDOM.render(<LoadingPage/>, document.getElementById('app'));

renderApp();

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        console.log(user.email);
        if(user.email === 'aarondabs@gmail.com'){
            console.log('Dispatchin!');
            store.dispatch(login(user.email));
            renderApp();
            if (history.location.pathname === '/login') {
                history.push('/admin');
            }
        }
    } else {
        store.dispatch(logout());
        renderApp();
    }
});