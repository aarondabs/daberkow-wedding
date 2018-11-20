import React from 'react';
import { Link }from 'react-router-dom';
import NavigationBar from './NavigationBar';

const Header = () => (
    <header className="header">
        <div className="content-container">
            <div className="header__content header__content--title">
                <Link className="header__title" to="/">
                    <h1>Daberkow Wedding</h1>
                </Link>
            </div>
        </div>
        <NavigationBar />
    </header>
);

export default Header;