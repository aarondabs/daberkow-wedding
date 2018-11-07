import React from 'react';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';
import { history } from '../routers/AppRouter';

const AdminPage = ({ startLogout }) => (
    <div>
        Admin stuff here
        <button onClick={startLogout}>Logout</button>
        <button onClick={goToAdd}>Add</button>
    </div>
);
const goToAdd = () => {
    history.push('/admin/add');
}

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout()),
})

export default connect(undefined, mapDispatchToProps)(AdminPage);