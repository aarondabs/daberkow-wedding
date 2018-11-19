import React from 'react';
import { Link }from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header = ({ startLogout }) => (
    <header className="header">
        <div className="content-container">
            <div className="header__content header__content--title">
                <Link className="header__title" to="/">
                    <h1>Daberkow Wedding</h1>
                </Link>
            </div>
            <div className="header__content">
                <Link className="header__tab" to="/home">
                    Home
                </Link>
                <Link className="header__tab" to="/info">
                    Event Info
                </Link>
                <Link className="header__tab" to="/rsvp">
                    RSVP
                </Link>
                <Link className="header__tab" to="/registry">
                    Registry
                </Link>
            </div>
        </div>
    </header>
);

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
})

export default connect(undefined, mapDispatchToProps)(Header);