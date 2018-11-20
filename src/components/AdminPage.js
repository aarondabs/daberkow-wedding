import React from 'react';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';
import GuestList from './GuestList';
import GuestsSummary from './GuestsSummary';
import GuestListFilters from './GuestListFilters';

const AdminPage = ({ startLogout }) => (
    <div>
        <GuestsSummary />
        <GuestListFilters />
        <GuestList />
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout()),
})

export default connect(undefined, mapDispatchToProps)(AdminPage);