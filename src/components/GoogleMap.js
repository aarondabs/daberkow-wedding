import React from 'react';
import GoogleMapReact from 'google-map-react';

export default class GoogleMap extends React.Component {
    renderMarkers(map, maps) {
        const title = `${this.props.venue.title}\n${this.props.venue.name}`;
        const infoWindow = new maps.InfoWindow({
            content: 'Content Here'
        });
        const marker = new maps.Marker({
            position: {
                lat: this.props.venue.center.lat,
                lng: this.props.venue.center.lng
            },
            map,
            title
        });
        marker.addListener('click', () => {
            infoWindow.open(map, marker);
        })
    }
    render() {
        return (
            <div style={{ height: '40vh', width: '70vw' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: process.env.MAPS_API_KEY }}
                    defaultCenter={this.props.venue.center}
                    defaultZoom={14}
                    onGoogleApiLoaded={({map, maps}) => this.renderMarkers(map, maps)}
                    yesIWantToUseGoogleMapApiInternals
                >

                </GoogleMapReact>
            </div>
        );
      }
}