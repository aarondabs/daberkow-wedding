import React from 'react';
import VenueInfo from './VenueInfo';
import { ceremonyVenue, receptionVenue } from '../constants/constants';
import GoogleMapsContainer from './GoogleMapsContainer';

const EventInfoPage = () => (
    <div>
        <VenueInfo venue={ceremonyVenue}/>
        <div className="google-map">
            <GoogleMapsContainer />
        </div>
        <VenueInfo venue={receptionVenue}/>
    </div>
);

export default EventInfoPage;