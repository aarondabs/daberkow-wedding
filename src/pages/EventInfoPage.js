import React from 'react';
import VenueInfo from '../components/VenueInfo';
import { ceremonyVenue, receptionVenue } from '../constants/constants';
import GoogleMap from '../components/GoogleMap';

const EventInfoPage = () => (
    <div className="content-container">
        <div className="page-info-container">
            <VenueInfo venue={ceremonyVenue}/>
            <div className="map-wrapper">
                <GoogleMap venue={ceremonyVenue}  />
            </div>
            <VenueInfo venue={receptionVenue}/>
            <div className="map-wrapper">
                <GoogleMap venue={receptionVenue}  />
            </div>
        </div>
    </div>
);

export default EventInfoPage;