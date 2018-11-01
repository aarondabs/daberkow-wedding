import React from 'react';
import GoogleMapReact from 'google-map-react';

export default class GoogleMap extends React.Component {
    render() {
        return (
            <div style={{ height: '40vh', width: '70vw' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: process.env.MAPS_API_KEY }}
                    defaultCenter={this.props.center}
                    defaultZoom={14}
                >

                </GoogleMapReact>
            </div>
        );
      }
}