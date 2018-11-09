import React from 'react';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';
import { history } from '../routers/AppRouter';
import GuestList from './GuestList';
import GuestsSummary from './GuestsSummary';

const AdminPage = ({ startLogout }) => (
    <div>
        <GuestsSummary />
        <GuestList />
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout()),
})

export default connect(undefined, mapDispatchToProps)(AdminPage);