import React from 'react';
import VenueInfo from '../components/VenueInfo';
import { ceremonyVenue, receptionVenue, hotelVenue } from '../constants/constants';
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
            <VenueInfo venue={hotelVenue}/>
            <div className="page-image-link-no-shadow">
                <a target="_blank" rel="noopener noreferrer" href="https://www.summitcove.com/land/hannah-aaron/">
                    <img src="/images/summit_cove_logo.png" />
                </a>
            </div>
        </div>
    </div>
);

export default EventInfoPage;