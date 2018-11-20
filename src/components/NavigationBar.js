import React from 'react';
import { Link }from 'react-router-dom';

const NavigationBar = () => (
    <div className="nav">
        <ul>
            <li>
                <Link className="homeNav" to="/home">
                    Home
                </Link>
            </li>
            <li>
                <Link className="infoNav" to="/info">
                    Event Info
                </Link>
            </li>
            <li>
                <Link className="rsvpNav" to="/rsvp">
                    RSVP
                </Link>
            </li>
            <li>
                <Link className="registryNav" to="/registry">
                    Registry
                </Link>
            </li>
        </ul>
    </div>
);

export default NavigationBar;