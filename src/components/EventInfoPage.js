import React from 'react';
import VenueInfo from './VenueInfo';
import { ceremonyVenue, receptionVenue } from '../constants/constants';
import GoogleMap from './GoogleMap';

const EventInfoPage = () => (
    <div>
        <VenueInfo venue={ceremonyVenue}/>
        <div className="map-wrapper">
            <GoogleMap center={ceremonyVenue.center}  />
        </div>
        <VenueInfo venue={receptionVenue}/>
        <div className="map-wrapper">
            <GoogleMap center={receptionVenue.center}  />
        </div>
    </div>
);

export default EventInfoPage;