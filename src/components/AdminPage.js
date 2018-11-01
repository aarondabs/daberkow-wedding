import React from 'react';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const AdminPage = ({ startLogout }) => (
    <div>
        Admin stuff here
        <button onClick={startLogout}>Logout</button>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
})

export default connect(undefined, mapDispatchToProps)(AdminPage);