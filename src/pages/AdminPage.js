import React from 'react';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';
import GuestList from '../components/GuestList';
import GuestsSummary from '../components/GuestsSummary';
import GuestListFilters from '../components/GuestListFilters';

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